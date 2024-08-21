// navigation/authNavigator.tsx
import React from 'react';
import type {RouteProp as NRouteProp} from '@react-navigation/native';

import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {ROUTE_NAMES} from '../helpers/routes';
import {LoginScreen} from '../screens/auth';

type AuthStackParamList = {
  navigate(url: string): void;
  Login: undefined;
};

export type RootcreenRouteProp<T extends keyof AuthStackParamList> = NRouteProp<
  AuthStackParamList,
  T
>;

export type AuthScreenNavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTE_NAMES.AUTH.LOGIN}>
      <Stack.Screen name={ROUTE_NAMES.AUTH.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
