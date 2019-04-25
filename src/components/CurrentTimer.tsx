import React from 'react';

type CurrentTimerProps = {
  currentTimer: "Focus" | "Break";
  toggleCurrentTimer: () => void;
};

export function CurrentTimer(props: CurrentTimerProps) {
  return (
    <>
      <h1 style={{ display: 'flex', justifyContent: 'center'}}>{props.currentTimer}</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}>
        <button onClick={props.toggleCurrentTimer}>{props.currentTimer === 'Focus' ? "Break" : "Focus"}</button>
      </div>
    </>
  );
}
