import { useRef, useState } from "react";

const useTimer = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(undefined);

  const startTimer = () => {
    if (!running) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      setRunning(true);
    } else {
      clearInterval(intervalRef.current);
      setRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setRunning(false);
  };

  return { startTimer, resetTimer, time, intervalRef };
};

export default useTimer;
