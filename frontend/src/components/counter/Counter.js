import React from "react";

const Counter = ({ cycleCount }) => {
  const circles = [0, 1, 2, 3].map((_, index) => (
    <svg className="mx-2" width="20" height="20" key={index}>
      <circle
        cx="10"
        cy="10"
        r="8"
        strokeWidth="2"
        stroke="#F58282"
        fill={cycleCount > index ? "#F58282" : "none"}
      />
    </svg>
  ));

  return <div className="flex justify-center">{circles}</div>;
};

export default Counter;
