import { create } from 'apisauce';
import AsyncStorage from '@react-native-community/async-storage';

import { apiEnvironmentVariables } from '../config/env';

const api = create({
  baseURL: apiEnvironmentVariables,
});

api.addAsyncRequestTransform((request) => async () => {
  const token = await AsyncStorage.getItem('@InfocusApp:token');
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
});

api.addResponseTransform((response) => {
  if (!response.ok) {
    throw response;
  }
});

export default api;
