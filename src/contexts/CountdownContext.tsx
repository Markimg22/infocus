import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import Sound from 'react-native-sound';

import { AuthContext } from './AuthContext';

interface CountdownContextData {
  key: number;
  countdownIsPlaying: boolean;
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

export const RESTING_TIME = 5 * 60;
export const WORKING_TIME = 25 * 60;

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
  const [key, setKey] = useState(0);
  const [countdownIsPlaying, setCountdownIsPlaying] = useState(false);
  const [isResting, setIsResting] = useState(false);

  const { loggedInUser, updateTotalWorkingTime, updateTotalRestTime } =
    useContext(AuthContext);

  // Change Time
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);

    console.log(`Change Countdown to ${isResting ? 'Rest' : 'Work'}`);
  }, [isResting]);

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
        key,
        countdownIsPlaying,
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
