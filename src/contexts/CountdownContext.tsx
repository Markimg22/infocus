import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import Sound from 'react-native-sound';

import { AuthContext } from './AuthContext';

interface CountdownContextData {
  time: number;
  minutes: number;
  seconds: number;
  countdownIsPlaying: boolean;
  key: number;
  isResting: boolean;
  changeCountdown: () => void;
  startCountdown: () => void;
  pauseCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: number;

const RESTING_TIME = 0.5 * 60;
const WORKING_TIME = 1 * 60;

const soundAlert = new Sound(
  require('../assets/sound/notification.mp3'),
  Sound.MAIN_BUNDLE,
  (error: any) => {
    if (error) {
      console.error('Sound not found');
    }
  },
);

export function CountdownProvider({ children }: CountdownProviderProps) {
  const [time, setTime] = useState(WORKING_TIME);
  const [countdownIsPlaying, setCountdownIsPlaying] = useState(false);
  const [isResting, setIsResting] = useState(false);
  const [key, setKey] = useState(0);

  const { loggedInUser, updateTotalWorkingTime, updateTotalRestTime } =
    useContext(AuthContext);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // Change Time
  useEffect(() => {
    setTime(isResting ? RESTING_TIME : WORKING_TIME);
    setKey((prevKey) => prevKey + 1);

    console.log(`Change Countdown to ${isResting ? 'Rest' : 'Work'}`);
  }, [isResting]);

  // Countdown
  useEffect(() => {
    if (countdownIsPlaying && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }

    if (time === 0) {
      changeCountdown();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdownIsPlaying, time]);

  const playSound = () => {
    soundAlert.play((success) => {
      console.log(
        success ? 'Successfully playing sound' : 'Failed playing sound',
      );
    });
  };

  const startCountdown = () => {
    setCountdownIsPlaying(true);
    console.log('Start Countdown');
  };

  const pauseCountdown = () => {
    setCountdownIsPlaying(false);
    console.log('Pause Countdown');
  };

  const resetCountdown = () => {
    setTime(isResting ? RESTING_TIME : WORKING_TIME);
    clearTimeout(countdownTimeout);
    setKey((prevKey) => prevKey + 1);

    console.log('Reset Countdown');
  };

  const changeCountdown = () => {
    setIsResting(!isResting);
    playSound();

    if (loggedInUser) {
      if (isResting) {
        updateTotalRestTime(RESTING_TIME); // save as seconds
      } else {
        updateTotalWorkingTime(WORKING_TIME); // save as seconds
      }
    }
  };

  return (
    <CountdownContext.Provider
      value={{
        time,
        minutes,
        seconds,
        countdownIsPlaying,
        key,
        isResting,
        changeCountdown,
        startCountdown,
        pauseCountdown,
        resetCountdown,
      }}>
      {children}
    </CountdownContext.Provider>
  );
}
