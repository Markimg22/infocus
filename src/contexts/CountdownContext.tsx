import React, { createContext, useState, useEffect, ReactNode } from 'react';

import Sound from 'react-native-sound';

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

const restingTime = 0.2 * 60;
const workingTime = 0.5 * 60;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const [time, setTime] = useState(workingTime);
  const [countdownIsPlaying, setCountdownIsPlaying] = useState(false);
  const [isResting, setIsResting] = useState(false);
  const [key, setKey] = useState(0);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const soundAlert = new Sound(
    'notification.mp3',
    Sound.MAIN_BUNDLE,
    (error: any) => {
      if (error) {
        console.error(error);
      }
    },
  );

  // Change Time
  useEffect(() => {
    setTime(isResting ? restingTime : workingTime);
    setKey((prevKey) => prevKey + 1);
  }, [isResting]);

  // Countdown
  useEffect(() => {
    if (countdownIsPlaying && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [countdownIsPlaying, time]);

  const playSound = () => {
    soundAlert.play((success: boolean) => {
      if (!success) {
        console.error('Sound not play');
      }
    });
  };

  const startCountdown = () => {
    setCountdownIsPlaying(true);
  };

  const pauseCountdown = () => {
    setCountdownIsPlaying(false);
  };

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setTime(isResting ? restingTime : workingTime);
    setKey((prevKey) => prevKey + 1);
  };

  const changeCountdown = () => {
    setIsResting(!isResting);
    playSound();
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
