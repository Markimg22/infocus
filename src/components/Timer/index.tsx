import React, { useState } from 'react';
import { View, Text, Vibration, StyleSheet, Dimensions } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import padToTwo from '../../utils/pad-to-two';
import TimerButtons from '../TimerButtons';

interface TimerProps {
  timeTask: number;
  timeRest: number;
}

export default function Timer(props: TimerProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const [timer, setTimer] = useState(props.timeTask);
  const [isRest, setIsRest] = useState(false);

  const handleTimer = () => {
    setIsPlaying(!isPlaying);
  };

  const resetTimer = () => {
    setKey((prevKey) => prevKey + 1);
  };

  const changeTimer = () => {
    Vibration.vibrate(1000, true);

    if (!isRest) {
      setTimer(props.timeRest);
      setIsRest(true);
    } else {
      setTimer(props.timeTask);
      setIsRest(false);
    }

    resetTimer();
  };

  return (
    <View style={styles.container}>
      <View>
        <CountdownCircleTimer
          key={key}
          isPlaying={isPlaying}
          colors="#BB86FC"
          strokeWidth={15}
          size={200}
          duration={timer * 60}
          initialRemainingTime={timer * 60}
          onComplete={changeTimer}>
          {({ remainingTime }) => {
            if (typeof remainingTime !== 'undefined') {
              const minutes = Math.floor(remainingTime / 60);
              const seconds = remainingTime % 60;
              return (
                <View style={styles.timerContainer}>
                  <Text style={styles.timerText}>
                    {`${padToTwo(minutes)}:${padToTwo(seconds)}`}
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
      <TimerButtons
        isPlaying={isPlaying}
        handleTimer={handleTimer}
        resetTimer={resetTimer}
      />
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
