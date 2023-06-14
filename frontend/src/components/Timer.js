import React, { useState, useEffect } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayTime, setDisplayTime] = useState("");
  const [timerType, setTimerType] = useState("pomodoro");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (timerType === "pomodoro") {
      setMinutes(25);
      setSeconds(0);
    } else if (timerType === "break") {
      setMinutes(5);
      setSeconds(0);
    } else if (timerType === "long break") {
      setMinutes(15);
      setSeconds(0);
    }
  }, [timerType]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let minute =
              timerType === "pomodoro" ? 25 : timerType === "break" ? 5 : 15;
            setMinutes(minute);
            setSeconds(0);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const updateTime = (time) => {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };

  useEffect(() => {
    setDisplayTime(updateTime(minutes) + ":" + updateTime(seconds));
  }, [minutes, seconds]);
  const resetTimer = () => {
    setIsActive(false);
    setMinutes(timerType === "pomodoro" ? 25 : timerType === "break" ? 5 : 15);
    setSeconds(0);
  };

  return (
    <div className="gap-5 flex flex-col items-center justify-between w-screen">
      <nav className="flex items-center justify-center space-x-[3px] mb-4">
        <button
          onClick={() => setTimerType("pomodoro")}
          className={`py-2 px-4 rounded-full text-sm font-semibold ${
            timerType === "pomodoro"
              ? "bg-[#F58282]  text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Pomodoro
        </button>
        <button
          onClick={() => setTimerType("break")}
          className={`py-2 px-4 rounded-full text-sm font-semibold ${
            timerType === "break"
              ? "bg-[#F58282]  text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Break
        </button>
        <button
          onClick={() => setTimerType("long break")}
          className={`py-2 px-4 rounded-full text-sm font-semibold ${
            timerType === "long break"
              ? "bg-[#F58282] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Long Break
        </button>
      </nav>
      <div className=" flex items-center justify-center border rounded-full w-[200px] h-[200px] text-2xl font-semibold mb-4  ">
        <p>{displayTime}</p>
      </div>
      <div>
        <button
          onClick={() => setIsActive(!isActive)}
          className="py-2 px-4 rounded-full text-sm font-semibold bg-green-500 text-white"
        >
          {isActive ? "Pause" : "Play"}
        </button>
        <button
          onClick={resetTimer}
          className="py-2 px-4 rounded-full text-sm font-semibold bg-red-500 text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
