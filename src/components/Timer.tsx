import React from 'react';
import { CurrentTimer } from './CurrentTimer';
import { Clock } from './Clock';
import { usePomodoro } from './usePomodoro';

function Timer() {
  const { currentTimer, toggleCurrentTimer, isRunning, toggleRunning, resetTimer, timeRemaining } = usePomodoro();

  return (
    <div>
      <CurrentTimer 
        currentTimer={currentTimer} 
        toggleCurrentTimer={toggleCurrentTimer} 
      />
      <h2>Time Remaining:</h2>
      <Clock minutes={timeRemaining.minutes} seconds={timeRemaining.seconds} />

      <button onClick={toggleRunning}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default Timer;