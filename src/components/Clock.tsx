import React from 'react';

type ClockProps = {
  minutes: string;
  seconds: string;
};

export function Clock(props: ClockProps) {
  return (<h3>{props.minutes}:{props.seconds}</h3>);
}
