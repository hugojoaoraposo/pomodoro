import React from "react";

import user from "../../img/profileicon.png"
import clock from "../../img/tomato2.png"
import sound from "../../img/bgmusiclogo.png"

const NavBar = ({selected}) => {
  return (
    <nav className="flex items-center justify-center gap-10  bg-none h-16 text-white fixed bottom-0  w-full">
     
      <span><img src={user} width={45}/></span> 
      <span><img src={clock} width={45}/></span>
      <span><img src={sound} width={45}/></span> 

    </nav>
  );
};


export default NavBar;
