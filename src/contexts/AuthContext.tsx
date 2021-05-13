import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

import { User } from '../types/User';
import { Task } from '../types/Task';

interface ResponseData {
  user: User;
  token: string;
}

interface AuthContextData {
  loggedInUser: User | null;
  errorMessage: string;
  tasks: Task[];
  createTask: (title: string) => Promise<void>;
  removeTask: (id: string) => Promise<void>;
  updateTask: (id: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    passwordAgain: string,
  ) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  clearErrors: () => void;
}

interface AuthProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProps) {
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@InfocusApp:user');
      const storageToken = await AsyncStorage.getItem('@InfocusApp:token');

      if (storageUser && storageToken) {
        setLoggedInUser(JSON.parse(storageUser));
        getTasksDatabase();
      }
    }

    loadStorageData();
  }, []);

  const clearErrors = () => {
    setErrorMessage('');
  };

  const getTasksDatabase = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data as Task[]);
    } catch (response) {
      console.error(response.data.errors);
    }
  };

  const createTask = async (title: string) => {
    try {
      const response = await api.post('/tasks', { title });
      setTasks([...tasks, response.data as Task]);
    } catch (response) {
      console.error(response.data.errors);
    }
  };

  const removeTask = async (id: string) => {
    try {
      const response = await api.delete(`/tasks/${id}`);
      setTasks(response.data as Task[]);
    } catch (response) {
      console.error(response.data.errors);
    }
  };

  const updateTask = async (id: string) => {
    try {
      const response = await api.put(`/tasks/${id}`);
      setTasks(response.data as Task[]);
    } catch (response) {
      console.error(response.data.errors);
    }
  };

  const register = async (
    email: string,
    password: string,
    passwordAgain: string,
  ) => {
    try {
      await api.post('/register', { email, password, passwordAgain });
      await signIn(email, password);

      clearErrors();
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

      await getTasksDatabase();

      setLoggedInUser(user);
      clearErrors();
    } catch (response) {
      setErrorMessage(response.data.errors);
    }
  };

  const signOut = async () => {
    await AsyncStorage.clear();
    setLoggedInUser(null);
    setTasks([]);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        errorMessage,
        tasks,
        createTask,
        removeTask,
        updateTask,
        register,
        signIn,
        signOut,
        clearErrors,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
