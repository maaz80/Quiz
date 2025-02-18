import { useState, useEffect } from "react";

const Timer = ({ timeLimit, onTimeUp }) => {
  const [time, setTime] = useState(timeLimit);

  useEffect(() => {
    if (time === 0) {
      onTimeUp();
      return;
    }
    // setting timer 
    const timer = setTimeout(() => setTime(time - 1), 1000);
    localStorage.setItem("timer", time);
    return () => clearTimeout(timer);
  }, [time]);

  // Formating sec in minutes and seconds
  const formatTime = (seconds) => {
    if (seconds >= 60) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes} min ${remainingSeconds} sec`;
    }
    return `${seconds}s`;
  };

  return <div className="text-red-500 font-bold text-xs md:text-base">Time Left: {formatTime(time)}</div>;
};

export default Timer;