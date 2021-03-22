import React, { createContext, useState, ReactNode } from 'react';
import { Alert } from 'react-native';

import listTasks from '../../tasks-test.json';

export interface Task {
  title: string;
  isCompleted: boolean;
}

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
  const [tasks, setTasks] = useState<Task[]>(listTasks);

  function createTask(title: string) {
    const search = tasks.filter((task) => task.title === title);

    if (search.length !== 0) {
      Alert.alert('Atenção', 'Nome da tarefa repetido');
      return;
    }

    setTasks([...tasks, { title, isCompleted: false }]);
    return tasks;
  }

  function removeTask(item: Task) {
    setTasks(tasks.filter((task) => task !== item));
    return tasks;
  }

  function checkTask(item: Task) {
    setTasks(
      tasks.filter((task) => {
        if (task.title === item.title) {
          task.isCompleted = !task.isCompleted;
        }
        return tasks;
      }),
    );
  }

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
