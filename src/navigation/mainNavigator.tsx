// navigation/authNavigator.tsx
import React from 'react';
import type {RouteProp as NRouteProp} from '@react-navigation/native';

import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {ROUTE_NAMES} from '../helpers/routes';
import {HomeScreen} from '../screens/main';

type MainStackParamList = {
  navigate(url: string): void;
  Home: undefined;
};

export type RootcreenRouteProp<T extends keyof MainStackParamList> = NRouteProp<
  MainStackParamList,
  T
>;

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTE_NAMES.MAIN.HOME}>
      <Stack.Screen name={ROUTE_NAMES.MAIN.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
