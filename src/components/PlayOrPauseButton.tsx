import React, { useContext } from 'react';
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
      size={120}
      onPress={isPlaying ? pauseCountdown : startCountdown}
    />
  );
}
