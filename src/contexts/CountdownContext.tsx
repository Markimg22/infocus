import React, { createContext, useState, useEffect, ReactNode } from 'react';

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

let countdownTimeout: NodeJS.Timeout;

const restingTime = 5 * 60;
const workingTime = 25 * 60;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const [time, setTime] = useState(workingTime);
  const [countdownIsPlaying, setCountdownIsPlaying] = useState(false);
  const [isResting, setIsResting] = useState(false);
  const [key, setKey] = useState(0);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setCountdownIsPlaying(true);
  }

  function pauseCountdown() {
    setCountdownIsPlaying(false);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setTime(isResting ? restingTime : workingTime);
    setKey((prevKey) => prevKey + 1);
  }

  function changeCountdown() {
    setIsResting(!isResting);
  }

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
