// import React, { useEffect, useState } from "react";

// const CountdownCircle = ({ minutes, seconds, initialMinutes }) => {
//   const radius = 95; // Adjust as needed
//   const circumference = 2 * Math.PI * radius;
//   const [offset, setOffset] = useState(circumference);
//   const timeLeft = minutes * 60 + seconds;
//   const initialTime = initialMinutes * 60;

//   useEffect(() => {
//     const strokeOffset = ((timeLeft / initialTime) * circumference) - circumference;
//     setOffset(strokeOffset);
//   }, [minutes, seconds]);

//   return (
//     <svg className="countdown-svg" width="200px" height="200px">
//       <circle
//         stroke="#ccc"
//         strokeWidth="5"
//         fill="transparent"
//         r={radius}
//         cx="100"
//         cy="100"
//       />
//       <circle
//         stroke="#F58282"
//         strokeWidth="5"
//         fill="transparent"
//         strokeLinecap="round"
//         strokeDashoffset={offset}
//         strokeDasharray={circumference}
//         r={radius}
//         cx="100"
//         cy="100"
//       />
//     </svg>
//   );
// };

// export default CountdownCircle;

import React, { useEffect, useState } from "react";

const CountdownCircle = ({ minutes, seconds, initialMinutes }) => {
  const radius = 95; // Adjust as needed
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);
  const timeLeft = minutes * 60 + seconds;
  const initialTime = initialMinutes * 60;

  useEffect(() => {
    const strokeOffset = ((timeLeft / initialTime) * circumference) - circumference;
    setOffset(strokeOffset);
  }, [minutes, seconds]);

  return (
    <svg className="countdown-svg rotate-[-90deg]"  width="200px" height="200px">
      <circle

        stroke="#ccc"
        strokeWidth="5"
        fill="transparent"
        r={radius}
        cx="100"
        cy="100"
      />
      <circle
        stroke="#FF1E00"
        strokeWidth="5"
        fill="transparent"
        strokeLinecap="round"
        strokeDashoffset={offset}
        strokeDasharray={circumference}
        r={radius}
        cx="100"
        cy="100"
      />
    </svg>
  );
};

export default CountdownCircle;

