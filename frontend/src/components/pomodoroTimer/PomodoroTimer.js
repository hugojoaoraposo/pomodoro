import React, { useState, useEffect } from 'react';
import "./PomodoroTimer.css"

function PomodoroTimer() {
  const totalTime = 1500; // 25 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(totalTime);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);

    // add timeLeft as a dependency to re-rerun the effect
    // when we decrement it
  }, [timeLeft]);

  return (
    <div className="timer">
      <div className="time-display">
        <span>{Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</span>
        <div className="time-remaining" style={{ 
          background: `conic-gradient(#0000ff ${(timeLeft / totalTime) * 100}%, #999999 0)`
        }}></div>
      </div>
    </div>
  );
}

export default PomodoroTimer;
