import React from "react";
// import user from "#svg/img/userlogo1.svg";

const NavBar = ({selected}) => {
  return (
    <nav className="flex items-center justify-center gap-10  bg-none h-16 text-white fixed bottom-0  w-full">
      {/* <img src={user} width={24} alt="Logo" /> */}
      {/* <UserSvg color={selected === "/profile" ? "blue" : "black"}/> */}
      <span>⏲</span> {/* Replace with pomodoro icon */}
      <span>🎵</span> {/* Replace with music icon */}
      <span>⏲</span> {/* Replace with pomodoro icon */}

    </nav>
  );
};


export default NavBar;
