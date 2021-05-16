import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { CountdownContext } from '../contexts/CountdownContext';

import { Color, scale } from '../config/style';

export function StartOrPauseButton() {
  const { countdownIsPlaying, pauseCountdown, startCountdown } =
    useContext(CountdownContext);

  return (
    <Icon
      name={countdownIsPlaying ? 'pause-circle' : 'play-circle'}
      color={countdownIsPlaying ? Color.grayColor : Color.primaryColor}
      size={scale(120)}
      onPress={countdownIsPlaying ? pauseCountdown : startCountdown}
    />
  );
}
