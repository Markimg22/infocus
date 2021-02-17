import React from 'react';
import { StatusBar } from 'react-native';
import AppStack from './routes/AppStack';

export default function App(): JSX.Element {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <AppStack />
    </>
  );
}
