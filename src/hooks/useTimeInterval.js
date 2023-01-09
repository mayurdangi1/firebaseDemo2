import { useEffect, useRef } from "react";

const useTimeInterval = (callback, delay) => {
  const savedCallback = useRef(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay) {
      const interval = setInterval(
        () => savedCallback.current(),
        delay || 1000
      );
      return () => clearInterval(interval);
    }

    return undefined;
  }, [delay]);
};

export default useTimeInterval;
