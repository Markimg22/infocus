import React from 'react';
import { StatusBar } from 'react-native';
import { Routes } from './routes';
import { TaskProvider } from 'contexts/TaskContext';

export default function App() {
  return (
    <TaskProvider>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Routes />
    </TaskProvider>
  );
}
