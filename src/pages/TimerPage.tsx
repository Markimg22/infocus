import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CountdownProvider } from '../contexts/CountdownContext';
import { Countdown } from '../components/Countdown';
import { StartOrPauseButton } from '../components/StartOrPauseButton';
import { ResetButton } from '../components/ResetButton';

export function TimerPage() {
  return (
    <CountdownProvider>
      <View style={styles.container}>
        <Countdown />
        <View style={styles.buttonsContainer}>
          <StartOrPauseButton />
          <ResetButton />
        </View>
      </View>
    </CountdownProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#333238',
  },
  buttonsContainer: {
    width: '50%',
    alignItems: 'center',
  },
});
