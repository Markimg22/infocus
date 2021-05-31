import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import { CountdownContext } from '../contexts/CountdownContext';

import { Color, FontSize, scale } from '../config/style';

export function Countdown() {
  const { time, minutes, seconds, countdownIsPlaying, key, changeCountdown } =
    useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={countdownIsPlaying}
      colors={Color.purpleColor}
      strokeWidth={scale(15)}
      size={scale(200)}
      duration={time}
      initialRemainingTime={time}
      onComplete={changeCountdown}>
      {({ remainingTime }) => {
        if (typeof remainingTime !== 'undefined') {
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
        }
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
