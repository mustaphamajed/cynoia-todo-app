import React, {createContext, useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {useAppDispatch} from '../helpers/hooks';
import {useQueryClient} from '@tanstack/react-query';
import api, {loginUser} from '../api/api';
import commonStyles from '../helpers/commonStyles';
import {View} from 'react-native';
import axios from 'axios';
import {getData, storeData} from '../helpers/storage';
import {STORAGE} from '../helpers/utils';

interface AuthProviderProps {
  children: React.ReactNode;
}
interface SignInProps {
  username: string;

  password: string;
}
interface SignUp {
  password: string;
  username: string;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  authLoading: boolean;
  login: ({username, password}: SignInProps) => void;
  register: (
    {password, username}: SignUp,
    navigateCallback: () => void,
  ) => void;
}
export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  authLoading: false,
  login: () => {},
  register: () => {},
});

export const AuthProvider = ({children}: AuthProviderProps) => {
  const {user} = useSelector((state: RootState) => state.auth);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [authLoading, setAuthLoading] = useState<boolean>(false);

  const login = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    try {
      setAuthLoading(true);
      const response = await api.post('/login', {
        username,
        password,
      });
      await storeData(STORAGE.accessToken, response.data.token);
      setIsAuthenticated(true);
      setAuthLoading(false);
    } catch (e) {
      setAuthLoading(false);

      console.log(JSON.stringify(e));
    }
  };

  const register = async (
    {
      username,
      password,
    }: {
      username: string;
      password: string;
    },
    navigateCallback: () => void,
  ) => {
    try {
      setAuthLoading(true);
      const response = await api.post('/register', {
        username,
        password,
      });

      setAuthLoading(false);
    } catch (e) {
      setAuthLoading(false);

      console.log(JSON.stringify(e));
    }
  };

  const loadStorageData = useCallback(async () => {
    try {
      let accessToken = await getData(STORAGE.accessToken);
      if (accessToken) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    loadStorageData();
  }, [loadStorageData]);

  return (
    <View style={[commonStyles.flex1]}>
      <AuthContext.Provider
        value={{login, register, isAuthenticated, authLoading}}>
        {children}
      </AuthContext.Provider>
    </View>
  );
};
