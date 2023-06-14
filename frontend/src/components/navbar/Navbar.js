import React from "react";
// import user from "#svg/img/userlogo1.svg";

const NavBar = ({selected}) => {
  return (
    <nav className="flex items-center justify-between bg-[#F58282] p-4 text-white fixed bottom-0 z-50 w-full">
      {/* <img src={user} width={24} alt="Logo" /> */}
      {/* <UserSvg color={selected === "/profile" ? "blue" : "black"}/> */}
      <span>⏲ user</span> {/* Replace with pomodoro icon */}
      <span>🎵 Music</span> {/* Replace with music icon */}
      <span>⏲ Pomodoro</span> {/* Replace with pomodoro icon */}

    </nav>
  );
};


export default NavBar;
