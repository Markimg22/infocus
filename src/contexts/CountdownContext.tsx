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
  }, [isResting]);

  // Countdown
  useEffect(() => {
    if (countdownIsPlaying && time > 1) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [countdownIsPlaying, time]);

  const playSound = () => {
    soundAlert.play((success) => {
      console.log(success ? 'Successfully playing' : 'Failed playing');
    });
  };

  const startCountdown = () => {
    setCountdownIsPlaying(true);
  };

  const pauseCountdown = () => {
    setCountdownIsPlaying(false);
  };

  const resetCountdown = () => {
    setTime(isResting ? RESTING_TIME : WORKING_TIME);
    clearTimeout(countdownTimeout);
    setKey((prevKey) => prevKey + 1);
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
        changeCountdown,
        startCountdown,
        pauseCountdown,
        resetCountdown,
      }}>
      {children}
    </CountdownContext.Provider>
  );
}
