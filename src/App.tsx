import React from 'react';

import { TaskProvider } from './contexts/TaskContext';
import { AuthProvider } from './contexts/AuthContext';
import { CountdownProvider } from './contexts/CountdownContext';

import { Routes } from './routes';

export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <CountdownProvider>
          <Routes />
        </CountdownProvider>
      </TaskProvider>
    </AuthProvider>
  );
}
