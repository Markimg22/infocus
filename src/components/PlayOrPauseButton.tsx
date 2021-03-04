import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { CountdownContext } from '../contexts/CountdownContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

export function PlayOrPauseButton() {
  const { isPlaying, pauseCountdown, startCountdown } = useContext(
    CountdownContext,
  );

  return (
    <Icon
      name={isPlaying ? 'pause-circle' : 'play-circle'}
      color={isPlaying ? '#CFD8DC' : '#fff'}
      style={styles.icon}
      onPress={isPlaying ? pauseCountdown : startCountdown}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
