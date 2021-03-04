import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isPlaying: boolean;
  startCountdown: () => void;
  pauseCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const [time, setTime] = useState(25 * 60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsPlaying(true);
  }

  function pauseCountdown() {
    setIsPlaying(false);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsPlaying(false);
    setTime(25 * 60);
    setHasFinished(false);
  }

  useEffect(() => {
    if (isPlaying && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isPlaying && time === 0) {
      setHasFinished(true);
      setIsPlaying(false);
    }
  }, [isPlaying, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isPlaying,
        startCountdown,
        pauseCountdown,
        resetCountdown,
      }}>
      {children}
    </CountdownContext.Provider>
  );
}
