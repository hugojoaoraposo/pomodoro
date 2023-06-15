// import React, { useState, useEffect } from "react";
// import CountdownCircle from "../countdownCircle/CountdownCircle";
// import PomodoroTimer from "../pomodoroTimer/PomodoroTimer";
// const Timer = () => {
//   const [minutes, setMinutes] = useState(25);
//   const [seconds, setSeconds] = useState(0);
//   const [displayTime, setDisplayTime] = useState("");
//   const [timerType, setTimerType] = useState("pomodoro");
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     if (timerType === "pomodoro") {
//       setMinutes(25);
//       setSeconds(0);
//     } else if (timerType === "break") {
//       setMinutes(5);
//       setSeconds(0);
//     } else if (timerType === "long break") {
//       setMinutes(15);
//       setSeconds(0);
//     }
//   }, [timerType]);

//   useEffect(() => {
//     let interval = null;
//     if (isActive) {
//       interval = setInterval(() => {
//         if (seconds === 0) {
//           if (minutes !== 0) {
//             setSeconds(59);
//             setMinutes(minutes - 1);
//           } else {
//             let minute =
//               timerType === "pomodoro" ? 25 : timerType === "break" ? 5 : 15;
//             setMinutes(minute);
//             setSeconds(0);
//           }
//         } else {
//           setSeconds(seconds - 1);
//         }
//       }, 1000);
//     } else if (!isActive) {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isActive, seconds]);

//   const updateTime = (time) => {
//     if (time < 10) {
//       return "0" + time;
//     } else {
//       return time;
//     }
//   };

//   useEffect(() => {
//     setDisplayTime(updateTime(minutes) + ":" + updateTime(seconds));
//   }, [minutes, seconds]);
//   const resetTimer = () => {
//     setIsActive(false);
//     setMinutes(timerType === "pomodoro" ? 25 : timerType === "break" ? 5 : 15);
//     setSeconds(0);
//   };

//   return (
//     <div className="gap-5 flex flex-col items-center justify-between w-screen">
//       <nav className="flex items-center justify-center space-x-[3px] mb-4">
//         <button
//           onClick={() => setTimerType("pomodoro")}
//           className={`py-2 px-4 rounded-full text-sm font-semibold ${
//             timerType === "pomodoro"
//               ? "bg-[#F58282]  text-white"
//               : "bg-gray-200 text-gray-700"
//           }`}
//         >
//           Pomodoro
//         </button>
//         <button
//           onClick={() => setTimerType("break")}
//           className={`py-2 px-4 rounded-full text-sm font-semibold ${
//             timerType === "break"
//               ? "bg-[#F58282]  text-white"
//               : "bg-gray-200 text-gray-700"
//           }`}
//         >
//           Break
//         </button>
//         <button
//           onClick={() => setTimerType("long break")}
//           className={`py-2 px-4 rounded-full text-sm font-semibold ${
//             timerType === "long break"
//               ? "bg-[#F58282] text-white"
//               : "bg-gray-200 text-gray-700"
//           }`}
//         >
//           Long Break
//         </button>
//       </nav>
//       <div className=" flex items-center justify-center border   text-2xl font-semibold mb-4 relative">
//       {/* <CountdownCircle/> */}
//       <CountdownCircle minutes={minutes} seconds={seconds} initialMinutes={25} />
//         <p>{displayTime}</p>
//       </div>
//       <div>
//         <button
//           onClick={() => setIsActive(!isActive)}
//           className="py-2 px-4 rounded-full text-sm font-semibold bg-green-500 text-white"
//         >
//           {isActive ? "Pause" : "Play"}
//         </button>
//         <button
//           onClick={resetTimer}
//           className="py-2 px-4 rounded-full text-sm font-semibold bg-red-500 text-white"
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Timer;

// SECOND CODE

// import React, { useState, useEffect } from "react";
// import CountdownCircle from "../countdownCircle/CountdownCircle";

// const Timer = () => {
//   const [minutes, setMinutes] = useState(25);
//   const [seconds, setSeconds] = useState(0);
//   const [displayTime, setDisplayTime] = useState("");
//   const [timerType, setTimerType] = useState("pomodoro");
//   const [isActive, setIsActive] = useState(false);
//   const [initialMinutes, setInitialMinutes] = useState(25);  // Add this line

//   useEffect(() => {
//     if (timerType === "pomodoro") {
//       setInitialMinutes(25);
//       setMinutes(25);
//       setSeconds(0);
//     } else if (timerType === "break") {
//       setInitialMinutes(5);
//       setMinutes(5);
//       setSeconds(0);
//     } else if (timerType === "long break") {
//       setInitialMinutes(15);
//       setMinutes(15);
//       setSeconds(0);
//     }
//   }, [timerType]);

//   useEffect(() => {
//     let interval = null;
//     if (isActive) {
//       interval = setInterval(() => {
//         if (seconds === 0) {
//           if (minutes !== 0) {
//             setSeconds(59);
//             setMinutes(minutes - 1);
//           } else {
//             let minute =
//               timerType === "pomodoro" ? 25 : timerType === "break" ? 5 : 15;
//             setMinutes(minute);
//             setSeconds(0);
//           }
//         } else {
//           setSeconds(seconds - 1);
//         }
//       }, 1000);
//     } else if (!isActive) {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isActive, seconds]);

//   const updateTime = (time) => {
//     if (time < 10) {
//       return "0" + time;
//     } else {
//       return time;
//     }
//   };

//   useEffect(() => {
//     setDisplayTime(updateTime(minutes) + ":" + updateTime(seconds));
//   }, [minutes, seconds]);

//   const resetTimer = () => {
//     setIsActive(false);
//     setMinutes(timerType === "pomodoro" ? 25 : timerType === "break" ? 5 : 15);
//     setSeconds(0);
//   };

//   return (
//     <div className="gap-5 flex flex-col items-center justify-between w-screen">
//       <nav className="flex items-center justify-center space-x-[3px] mb-4">
//         <button
//           onClick={() => setTimerType("pomodoro")}
//           className={`h-8 px-4 rounded-full text-sm font-extralight ${
//             timerType === "pomodoro"
//               ? "bg-[#F58282]  text-white"
//               : "bg-gray-200 text-gray-700"
//           }`}
//         >
//           Pomodoro
//         </button>
//         <button
//           onClick={() => setTimerType("break")}
//           className={`h-8 px-4 rounded-full text-sm font-extralight ${
//             timerType === "break"
//               ? "bg-[#F58282]  text-white"
//               : "bg-gray-200 text-gray-700"
//           }`}
//         >
//           Break
//         </button>
//         <button
//           onClick={() => setTimerType("long break")}
//           className={`h-8 px-4 rounded-full text-sm font-extralight ${
//             timerType === "long break"
//               ? "bg-[#F58282] text-white"
//               : "bg-gray-200 text-gray-700"
//           }`}
//         >
//           Long Break
//         </button>
//       </nav>
//       <div className="flex items-center justify-center border rounded-full w-[200px] h-[200px] text-2xl font-semibold relative">
//         <CountdownCircle minutes={minutes} seconds={seconds} initialMinutes={initialMinutes} />
//         <p className="absolute">{displayTime}</p>
//       </div>
//       <div>
//         <button
//           onClick={() => setIsActive(!isActive)}
//           className="h-8 px-4 rounded-full text-sm font-extralight bg-[#208A3E] text-white"
//         >
//           {isActive ? "Pause" : "Play"}
//         </button>
//         <button
//           onClick={resetTimer}
//           className="h-8 px-4 rounded-full text-sm font-extralight bg-red-500 text-white"
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Timer;

// THIRD CODE

import React, { useState, useEffect } from "react";
import CountdownCircle from "../countdownCircle/CountdownCircle";
import Counter from "../counter/Counter";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayTime, setDisplayTime] = useState("");
  const [timerType, setTimerType] = useState("pomodoro");
  const [isActive, setIsActive] = useState(false);
  const [initialMinutes, setInitialMinutes] = useState(25);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    if (timerType === "pomodoro") {
      setInitialMinutes(25);
      setMinutes(25);
      setSeconds(0);
    } else if (timerType === "break") {
      setInitialMinutes(5);
      setMinutes(5);
      setSeconds(0);
    } else if (timerType === "long break") {
      setInitialMinutes(15);
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

  useEffect(() => {
    if (timerType === "pomodoro" && minutes === 0 && seconds === 0) {
      setCycleCount((prevCount) => prevCount + 1);
      if (cycleCount === 3) {
        setTimerType("long break");
        setCycleCount(0);
      } else {
        setTimerType("break");
      }
    }
  }, [minutes, seconds, timerType, cycleCount]);

  const sendCycles = async () => {
    const res = await fetch("/api/counter", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cycleCount),
    });
  };

  useEffect(() => {
    (async () => {
      await sendCycles();
    })();
  }, [cycleCount]);

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
          className={`h-8 px-4 rounded-full text-sm font-extralight ${
            timerType === "pomodoro"
              ? "bg-[#F58282]  text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Pomodoro
        </button>
        <button
          onClick={() => setTimerType("break")}
          className={`h-8 px-4 rounded-full text-sm font-extralight ${
            timerType === "break"
              ? "bg-[#F58282] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Short Break
        </button>
        <button
          onClick={() => setTimerType("long break")}
          className={`h-8 px-4 rounded-full text-sm font-extralight ${
            timerType === "long break"
              ? "bg-[#F58282] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Long Break
        </button>
      </nav>

      <div className="flex items-center justify-center  w-[200px] h-[200px] text-2xl font-semibold relative">
        <CountdownCircle
          isActive={isActive}
          setIsActive={setIsActive}
          initialMinutes={initialMinutes}
          minutes={minutes}
          seconds={seconds}
        />
        <p className="absolute">{displayTime}</p>
      </div>

      <Counter cycleCount={cycleCount} />

      <button
        onClick={() => setIsActive(!isActive)}
        className="h-8 px-4 rounded-full text-sm font-extralight bg-[#208A3E] text-[#f4f4f9]"
      >
        {isActive ? "Pause" : "Play"}
      </button>
      <button
        onClick={resetTimer}
        className="h-8 px-4 rounded-full text-sm font-extralight bg-red-500 text-[#f4f4f9]"
      >
        Reset
      </button>
    </div>
  );
};

export default Timer;
