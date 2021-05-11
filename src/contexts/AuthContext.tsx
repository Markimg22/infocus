import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

export interface User {
  id: string;
  email: string;
  created_at: string;
}

interface ResponseData {
  user: User;
  token: string;
}

interface AuthContextData {
  loggedInUser: User | null;
  // token: string;
  errorMessage: string;
  register: (
    email: string,
    password: string,
    passwordAgain: string,
  ) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProps) {
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@InfocusApp:user');
      const storageToken = await AsyncStorage.getItem('@InfocusApp:token');

      if (storageUser && storageToken) {
        setLoggedInUser(JSON.parse(storageUser));
      }
    }

    loadStorageData();
  });

  const register = async (
    email: string,
    password: string,
    passwordAgain: string,
  ) => {
    try {
      await api.post('/register', { email, password, passwordAgain });
      await signIn(email, password);

      setErrorMessage('');
    } catch (response) {
      setErrorMessage(response.data.errors);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const response = await api.post('/login', { email, password });
      const { user, token } = response.data as ResponseData;

      await AsyncStorage.multiSet([
        ['@InfocusApp:token', token],
        ['@InfocusApp:user', JSON.stringify(user)],
      ]);

      setLoggedInUser(user);
      setErrorMessage('');
    } catch (response) {
      setErrorMessage(response.data.errors);
    }
  };

  const signOut = async () => {
    await AsyncStorage.clear();
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        errorMessage,
        register,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
