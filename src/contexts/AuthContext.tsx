import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

import api from '../services/api';

import { User } from '../types/User';
import { Task } from '../types/Task';
import { Performance } from '../types/Performance';

interface ResponseData {
  user: User;
  token: string;
}

interface AuthContextData {
  loggedInUser: User | null;
  errorMessage: string;
  tasks: Task[];
  performance: Performance;
  loading: boolean;
  clearErrors: () => void;
  updateTotalTasksCompleted: (value: number) => Promise<void>;
  updateTotalWorkingTime: (value: number) => Promise<void>;
  updateTotalRestTime: (value: number) => Promise<void>;
  createTask: (title: string) => Promise<void>;
  removeTask: (id: string) => Promise<void>;
  updateTask: (id: string, value: boolean) => Promise<void>;
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
  const [loading, setLoading] = useState(false);

  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [performance, setPerformance] = useState<Performance>(
    {} as Performance,
  );

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@InfocusApp:user');
      const storageToken = await AsyncStorage.getItem('@InfocusApp:token');

      if (storageUser && storageToken) {
        setLoggedInUser(JSON.parse(storageUser));

        await getTasksDatabase();
        await getPerformanceDatabase();
      }
    }

    loadStorageData();
  }, []);

  const clearErrors = () => {
    setErrorMessage('');
  };

  /**
   * PERFORMANCE
   */

  const getPerformanceDatabase = async () => {
    setLoading(true);
    try {
      const response = await api.get('/user/performance');
      setPerformance(response.data as Performance);
      setLoading(false);
    } catch (response) {
      setLoading(false);
      Alert.alert('Houve um erro', response.data.errors);
    }
  };

  const updateTotalTasksCompleted = async (value: number) => {
    setLoading(true);
    try {
      const response = await api.put('/performance/totalTasksCompleted', {
        value,
      });
      setPerformance(response.data as Performance);
      setLoading(false);
    } catch (response) {
      setLoading(false);
      Alert.alert('Houve um erro', response.data.errros);
    }
  };

  const updateTotalWorkingTime = async (value: number) => {
    setLoading(true);
    try {
      const response = await api.put('/performance/totalWorkingTime', {
        value,
      });
      setPerformance(response.data as Performance);
      setLoading(false);
    } catch (response) {
      setLoading(false);
      Alert.alert('Houve um erro', response.data.errors);
    }
  };

  const updateTotalRestTime = async (value: number) => {
    setLoading(true);
    try {
      const response = await api.put('/performance/totalRestTime', { value });
      setPerformance(response.data as Performance);
      setLoading(false);
    } catch (response) {
      setLoading(false);
      Alert.alert('Houve um erro', response.data.errors);
    }
  };

  /**
   * TASKS
   */

  const getTasksDatabase = async () => {
    try {
      const response = await api.get('/user/tasks');
      setTasks(response.data as Task[]);
    } catch (response) {
      Alert.alert('Houve um erro', response.data.errors);
    }
  };

  const createTask = async (title: string) => {
    setLoading(true);
    try {
      const response = await api.post('/user/tasks', { title });
      setTasks(response.data as Task[]);
      setLoading(false);
    } catch (response) {
      Alert.alert('Houve um erro', response.data.errors);
      setLoading(false);
    }
  };

  const removeTask = async (id: string) => {
    setLoading(true);
    try {
      const response = await api.delete(`/user/tasks/${id}`);
      setTasks(response.data as Task[]);
      setLoading(false);
    } catch (response) {
      Alert.alert('Houve um erro', response.data.errors);
      setLoading(false);
    }
  };

  const updateTask = async (id: string, value: boolean) => {
    setLoading(true);
    try {
      if (value) {
        await updateTotalTasksCompleted(1);
      } else {
        await updateTotalTasksCompleted(-1);
      }

      const response = await api.put(`/user/tasks/${id}`, { value });
      setTasks(response.data as Task[]);
      setLoading(false);
    } catch (response) {
      Alert.alert('Houve um erro', response.data.errors);
      setLoading(false);
    }
  };

  /**
   * SIGNIN & REGISTER & SIGNOUT
   */

  const register = async (
    email: string,
    password: string,
    passwordAgain: string,
  ) => {
    setLoading(true);
    try {
      await api.post('/register', { email, password, passwordAgain });
      await signIn(email, password);

      clearErrors();
      setLoading(false);
    } catch (response) {
      setErrorMessage(response.data.errors);
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await api.post('/login', { email, password });
      const { user, token } = response.data as ResponseData;

      await AsyncStorage.multiSet([
        ['@InfocusApp:token', token],
        ['@InfocusApp:user', JSON.stringify(user)],
      ]);

      await getTasksDatabase();
      await getPerformanceDatabase();

      setLoggedInUser(user);
      clearErrors();
      setLoading(false);
    } catch (response) {
      setErrorMessage(response.data.errors);
      setLoading(false);
    }
  };

  const signOut = async () => {
    await AsyncStorage.multiRemove(['@InfocusApp:user', '@InfocusApp:token']);
    setLoggedInUser(null);
    setTasks([]);
    setPerformance({} as Performance);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        errorMessage,
        tasks,
        performance,
        loading,
        clearErrors,
        updateTotalTasksCompleted,
        updateTotalWorkingTime,
        updateTotalRestTime,
        createTask,
        removeTask,
        updateTask,
        register,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
