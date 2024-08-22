// navigation/authNavigator.tsx
import React from 'react';
import type {RouteProp as NRouteProp} from '@react-navigation/native';

import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {ROUTE_NAMES} from '../helpers/routes';
import {HomeScreen, NewProjectScreen, ProjectDetails} from '../screens/main';

type MainStackParamList = {
  navigate(url: string): void;
  Home: undefined;
  ProjectDetails: {projectId: number; projectName: string};
  NewProject: undefined;
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
      <Stack.Screen
        name={ROUTE_NAMES.MAIN.PROJECT_DETAILS}
        component={ProjectDetails}
      />
      <Stack.Screen
        name={ROUTE_NAMES.MAIN.NEW_PROJECT}
        component={NewProjectScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
