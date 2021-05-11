import React from 'react';
import { StatusBar } from 'react-native';

import { Routes } from './routes';

import { TaskProvider } from 'contexts/TaskContext';
import { AuthProvider } from 'contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Routes />
      </TaskProvider>
    </AuthProvider>
  );
}
