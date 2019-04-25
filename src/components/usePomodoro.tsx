import React from 'react';
import { CountdownReturn, useCountdown } from './useCountdown';

type PomodoroReturn = {
  currentTimer: "Focus" | "Break";
  toggleCurrentTimer: () => void;
} & CountdownReturn;

export function usePomodoro(): PomodoroReturn {
  const [currentTimer, setCurrentTimer] = React.useState<"Focus" | "Break">("Focus");
  const { isRunning, toggleRunning, resetTimer, timeRemaining } = useCountdown(currentTimer === "Focus" ? 25 : 5);

  return {
    currentTimer,
    toggleCurrentTimer: () => {
      resetTimer();
      setCurrentTimer(t => t === "Focus" ? "Break" : "Focus");
    },
    isRunning,
    toggleRunning,
    resetTimer,
    timeRemaining,
  };
}
