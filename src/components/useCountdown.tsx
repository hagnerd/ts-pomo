import React from 'react';
import { useInterval } from './useInterval';

export type CountdownReturn = {
  isRunning: boolean;
  toggleRunning: () => void;
  timeRemaining: {
    totalInSeconds: number;
    minutes: string;
    seconds: string;
  };
  resetTimer: () => void;
};

export function useCountdown(startingTime: number, minutesOrSeconds: "minutes" | "seconds" = "minutes"): CountdownReturn {
  const [isRunning, setIsRunning] = React.useState(false);

  const [timeRemaining, setTimeRemaining] = React.useState(() => {
    if (minutesOrSeconds === "minutes") {
      return startingTime * 60;
    }
    else {
      return startingTime;
    }
  });

  React.useEffect(() => {
    setIsRunning(false);
    setTimeRemaining(() => {
      if (minutesOrSeconds === 'minutes') {
        return startingTime * 60;
      } else {
        return startingTime;
      }
    })

  }, [startingTime]);

  useInterval(() => {
    setTimeRemaining(t => t - 1);
  }, isRunning ? 1000 : null);

  return {
    isRunning,
    toggleRunning: () => {
      setIsRunning(i => !i);
    },
    timeRemaining: {
      totalInSeconds: timeRemaining,
      minutes: `${Math.floor(timeRemaining / 60)}`.padStart(2, '0'),
      seconds: `${timeRemaining % 60}`.padStart(2, '0'),
    },
    resetTimer: () => {
      setIsRunning(false);
      setTimeRemaining(startingTime * 60);
    }
  };
}
