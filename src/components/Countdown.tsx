import { CountdownContext } from 'contexts/CountdownContext';
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export function Countdown() {
  const { time, minutes, seconds, isPlaying, resetCountdown } = useContext(
    CountdownContext,
  );

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      colors="#BB86FC"
      strokeWidth={15}
      size={200}
      duration={time}
      initialRemainingTime={time}
      onComplete={resetCountdown}>
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
    color: '#fff',
    fontSize: 45,
    fontWeight: 'bold',
  },
  timerInfoText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
