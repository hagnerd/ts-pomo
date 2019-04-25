import React from 'react';

export function useInterval(cb: () => void, delay?: number | null): void {
  const savedCallback = React.useRef<() => void>();
  const timerId = React.useRef<number>();
  React.useEffect(() => {
    savedCallback.current = cb;
  }, [cb]);
  React.useEffect(() => {
    function tick() {
      if (savedCallback.current !== undefined) {
        savedCallback.current();
      }
    }
    if (delay !== undefined && delay !== null) {
      timerId.current = setInterval(tick, delay);
    }
    return () => {
      if (timerId.current !== undefined) {
        clearInterval(timerId.current);
      }
    };
  }, [delay]);
}
