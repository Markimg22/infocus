import React, { createContext, useState, ReactNode } from 'react';
import { Alert } from 'react-native';

import { Task } from '../types/Task';

interface TaskContextData {
  locaTasks: Task[];
  createLocalTask: (title: string) => Task[] | undefined;
  removeLocalTask: (item: Task) => Task[];
  updateLocalTask: (item: Task) => void;
}

interface TaskProps {
  children: ReactNode;
}

export const TaskContext = createContext({} as TaskContextData);

export function TaskProvider({ children }: TaskProps) {
  const [locaTasks, setLocalTasks] = useState<Task[]>([]);

  const createLocalTask = (title: string) => {
    const search = locaTasks.filter((task) => task.title === title);

    if (title === '') {
      Alert.alert('Atenção', 'Insira um título para sua atividade.');
      return;
    }

    if (search.length !== 0) {
      Alert.alert('Atenção!', 'Nome da tarefa repetido, tente outro.');
      return;
    }

    setLocalTasks([...locaTasks, { title, isCompleted: false }]);
    return locaTasks;
  };

  const removeLocalTask = (item: Task) => {
    setLocalTasks(locaTasks.filter((task) => task !== item));
    return locaTasks;
  };

  const updateLocalTask = (item: Task) => {
    setLocalTasks(
      locaTasks.filter((task) => {
        if (task.title === item.title) {
          task.isCompleted = !task.isCompleted;
        }

        return locaTasks;
      }),
    );
  };

  return (
    <TaskContext.Provider
      value={{
        locaTasks,
        createLocalTask,
        removeLocalTask,
        updateLocalTask,
      }}>
      {children}
    </TaskContext.Provider>
  );
}
