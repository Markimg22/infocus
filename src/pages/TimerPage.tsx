import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Countdown } from '../components/Countdown';
import { PlayOrPauseButton } from '../components/PlayOrPauseButton';
import { ResetButton } from '../components/ResetButton';
import { CountdownProvider } from '../contexts/CountdownContext';

export function TimerPage() {
  return (
    <CountdownProvider>
      <View style={styles.container}>
        <Countdown />
        <PlayOrPauseButton />
        <ResetButton />
      </View>
    </CountdownProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
