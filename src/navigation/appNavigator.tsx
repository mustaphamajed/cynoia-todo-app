import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import type {RouteProp as NRouteProp} from '@react-navigation/native';
import AuthNavigator from './authNavigator';
import MainNavigator from './mainNavigator';
import {ROUTE_NAMES} from '../helpers/routes';

type RootStackParamList = {
  navigate(url: string): void;
  Auth: undefined;
  Main: undefined;
};

export type RootScreenRouteProp<T extends keyof RootStackParamList> =
  NRouteProp<RootStackParamList, T>;

export type RootScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={ROUTE_NAMES.STACK.AUTH}>
        <Stack.Screen name={ROUTE_NAMES.STACK.AUTH} component={AuthNavigator} />
        <Stack.Screen name={ROUTE_NAMES.STACK.MAIN} component={MainNavigator} />
      </Stack.Navigator>
    </>
  );
};

export default AppNavigator;
