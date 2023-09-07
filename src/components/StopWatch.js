import React, { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);
  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="text-red-500">
      <h3>Timer: {count}</h3>
      <div className="flex gap-4">
        <button onClick={handleStart}>Click me</button>
        <button onClick={handleStop}>Click me</button>
      </div>
    </div>
  );
};

export default StopWatch;
