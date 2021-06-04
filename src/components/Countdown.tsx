import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import {
  CountdownContext,
  WORKING_TIME,
  RESTING_TIME,
} from '../contexts/CountdownContext';

import { Color, FontSize, scale } from '../config/style';

export function Countdown() {
  const { countdownIsPlaying, key, isResting, changeCountdown } =
    useContext(CountdownContext);

  return (
    <CountdownCircleTimer
      key={key}
      isLinearGradient={false}
      isPlaying={countdownIsPlaying}
      colors={Color.purpleColor}
      strokeWidth={scale(15)}
      trailColor={Color.contrastColor}
      size={scale(200)}
      duration={isResting ? RESTING_TIME : WORKING_TIME}
      initialRemainingTime={isResting ? RESTING_TIME : WORKING_TIME}
      onComplete={changeCountdown}>
      {({ remainingTime }) => {
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;

        const [minuteLeft, minuteRight] = String(minutes)
          .padStart(2, '0')
          .split('');
        const [secondLeft, secondRight] = String(seconds)
          .padStart(2, '0')
          .split('');

        return (
          <View>
            <Text style={styles.timerText}>
              {`${minuteLeft}${minuteRight}:${secondLeft}${secondRight}`}
            </Text>
            <Text style={styles.timerInfoText}>
              {minutes > 1 ? 'minutos restantes' : 'minuto restante'}
            </Text>
          </View>
        );
      }}
    </CountdownCircleTimer>
  );
}

const styles = StyleSheet.create({
  timerText: {
    textAlign: 'center',
    color: Color.primaryColor,
    fontSize: FontSize.headline,
    fontWeight: 'bold',
  },
  timerInfoText: {
    textAlign: 'center',
    color: Color.primaryColor,
    fontSize: FontSize.small,
    fontWeight: 'bold',
  },
});
