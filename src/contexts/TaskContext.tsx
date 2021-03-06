import React, { createContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

import { Task } from '../types/Task';

interface TaskContextData {
  localTasks: Task[];
  loadingLocal: boolean;
  createLocalTask: (title: string) => Promise<Task[] | undefined>;
  removeLocalTask: (item: Task) => Promise<Task[] | undefined>;
  updateLocalTask: (item: Task) => Promise<void>;
}

interface TaskProps {
  children: ReactNode;
}

export const TaskContext = createContext({} as TaskContextData);

export function TaskProvider({ children }: TaskProps) {
  const [localTasks, setLocalTasks] = useState<Task[]>([]);
  const [loadingLocal, setLoadingLocal] = useState(false);

  useEffect(() => {
    async function loadLocalTasks() {
      const tasks = await AsyncStorage.getItem('@InfocusApp:tasks');

      if (!tasks) {
        await AsyncStorage.setItem('@InfocusApp:tasks', '[]');
      } else {
        setLocalTasks(JSON.parse(tasks));
      }
    }

    loadLocalTasks();
  }, []);

  const createLocalTask = async (title: string) => {
    setLoadingLocal(true);

    try {
      const search = localTasks.filter((task) => task.title === title);

      if (title === '') {
        Alert.alert('Houve um erro', 'Insira um título para sua tarefa.');
        setLoadingLocal(false);
        return;
      }

      if (search.length !== 0) {
        Alert.alert('Houve um erro', 'Tarefa já existe, tente outra.');
        setLoadingLocal(false);
        return;
      }

      const newTasks = [...localTasks, { title, isCompleted: false }];

      setLocalTasks(newTasks);
      await AsyncStorage.setItem('@InfocusApp:tasks', JSON.stringify(newTasks));

      setLoadingLocal(false);
      return localTasks;
    } catch (e) {
      setLoadingLocal(false);
      console.error('Houve um erro ao criar tareafa');
    }
  };

  const removeLocalTask = async (item: Task) => {
    setLoadingLocal(true);

    try {
      const newTasks = localTasks.filter((task) => task !== item);

      setLocalTasks(newTasks);
      await AsyncStorage.setItem('@InfocusApp:tasks', JSON.stringify(newTasks));

      setLoadingLocal(false);
      return localTasks;
    } catch (e) {
      setLoadingLocal(false);
      console.error('Houve um erro ao remover tarefa');
    }
  };

  const updateLocalTask = async (item: Task) => {
    setLoadingLocal(true);

    try {
      const newTasks = localTasks.filter((task) => {
        if (task.title === item.title) {
          task.isCompleted = !task.isCompleted;
        }

        return localTasks;
      });

      setLocalTasks(newTasks);
      await AsyncStorage.setItem('@InfocusApp:tasks', JSON.stringify(newTasks));

      setLoadingLocal(false);
    } catch (e) {
      setLoadingLocal(false);
      console.error('Houve um erro ao atualizar dados');
    }
  };

  return (
    <TaskContext.Provider
      value={{
        localTasks,
        loadingLocal,
        createLocalTask,
        removeLocalTask,
        updateLocalTask,
      }}>
      {children}
    </TaskContext.Provider>
  );
}
