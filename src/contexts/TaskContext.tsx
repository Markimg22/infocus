import React, { createContext, useState, ReactNode } from 'react';
import { Alert } from 'react-native';

import { Task } from '../types/Task';

interface TaskContextData {
  tasks: Task[];
  createTask: (title: string) => Task[] | undefined;
  removeTask: (item: Task) => Task[];
  checkTask: (item: Task) => void;
}

interface TaskProps {
  children: ReactNode;
}

export const TaskContext = createContext({} as TaskContextData);

export function TaskProvider({ children }: TaskProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (title: string) => {
    const search = tasks.filter((task) => task.title === title);
    if (search.length !== 0) {
      Alert.alert('Atenção!', 'Nome da tarefa repetido, tente outro.');
      return;
    }
    setTasks([...tasks, { title, is_completed: false }]);
    return tasks;
  };

  const removeTask = (item: Task) => {
    setTasks(tasks.filter((task) => task !== item));
    return tasks;
  };

  const checkTask = (item: Task) => {
    setTasks(
      tasks.filter((task) => {
        if (task.title === item.title) {
          task.is_completed = !task.is_completed;
        }
        return tasks;
      }),
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        removeTask,
        checkTask,
      }}>
      {children}
    </TaskContext.Provider>
  );
}
