import { CountdownContext } from 'contexts/CountdownContext';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export function Countdown() {
  const { minutes, seconds, isPlaying, resetCountdown } = useContext(
    CountdownContext,
  );

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <View style={styles.container}>
      <View>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          colors="#BB86FC"
          strokeWidth={15}
          size={200}
          duration={minutes}
          initialRemainingTime={minutes}
          onComplete={resetCountdown}>
          {({ remainingTime }) => {
            if (typeof remainingTime !== 'undefined') {
              return (
                <View style={styles.timerContainer}>
                  <Text style={styles.timerText}>
                    {`${minuteLeft}${minuteRight}:${secondLeft}${secondRight}`}
                  </Text>
                  <Text style={styles.timerMsg}>
                    {minutes > 1 ? 'minutos restantes' : 'minuto restante'}
                  </Text>
                </View>
              );
            }
          }}
        </CountdownCircleTimer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: -30,
  },
  timerContainer: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  countdownContainer: {
    marginTop: -70,
  },
  timerText: {
    color: '#fff',
    fontSize: 45,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  timerMsg: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
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