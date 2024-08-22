import axios from 'axios';
import { endPoint } from './endPoint';
import { deleteData, getData } from '../helpers/storage';
import { STORAGE } from '../helpers/utils';
import { jwtDecode } from 'jwt-decode';

const api = axios.create({
  baseURL: endPoint,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await getData(STORAGE.accessToken); 

    if (token && isTokenExpired(token)) {
        await deleteData(STORAGE.accessToken); 

    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

const isTokenExpired = (token: string) => {
  try {
    const decodedToken: any = jwtDecode(token);
    return decodedToken.exp * 1000 < Date.now();
  } catch (error) {
    return true; // Consider the token expired if decoding fails
  }
};

export default api;