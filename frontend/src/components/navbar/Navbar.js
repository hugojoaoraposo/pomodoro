// import React from "react";
// import { useEffect, useState } from "react";

// import { Link } from 'react-router-dom';

// import user from "../../img/usersuave.png"
// import userdark from "../../img/userdark.png"
// import tomatesuave from "../../img/tomatesuave.png"
// import tomatedark from "../../img/tomatedark.png"
// import sound from "../../img/somsuave.png"

// const NavBar = ({pages}) => {
//   const [selected, setSelected] = useState("profile");
//   const handleClick = () => {
//     setSelected((prevState) => pages);
//   };

//   useEffect(() => {
//     handleClick();
//   }, [selected]);

//   return (
//     <nav className="flex items-center justify-center gap-10  bg-none h-16 text-white fixed bottom-0  w-full">
//      <Link to="/profile">
//       <div onClick={handleClick}><img src={selected === "profile" ? userdark : user}  width={45}/></div> 
//       </Link>
//       <Link to="/pomodoro">
//       <div onClick={handleClick}><img src={selected === "pomodoro" ? tomatedark : tomatesuave} width={45}/></div>
//       </Link>
//       <div onClick={handleClick}><img src={sound} width={45}/></div> 

//     </nav>
//   );
// };


// export default NavBar;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import user from "../../img/usersuave.png"
import userdark from "../../img/userdark.png"
import tomatesuave from "../../img/tomatesuave.png"
import tomatedark from "../../img/tomatedark.png"
import sound from "../../img/somsuave.png"

const NavBar = ({pages}) => {
  const [selected, setSelected] = useState("profile");
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    setSelected((prevState) => pages);
  };

  useEffect(() => {
    handleClick();
  }, [selected]);

  return (
    <nav className="flex items-center justify-center gap-10 bg-none h-16 text-white fixed bottom-0 w-full">
     <Link to="/profile">
      <div onClick={handleClick}><img src={selected === "profile" ? userdark : user}  width={45}/></div> 
      </Link>
      <Link to="/pomodoro">
      <div onClick={handleClick}><img src={selected === "pomodoro" ? tomatedark : tomatesuave} width={45}/></div>
      </Link>
      <div onClick={() => setShowPopup(!showPopup)}><img src={sound} width={45}/></div> 

      {showPopup && (
        <div className="popup border border-rose-700 mb-56 flex flex-col justify-center items-center">

          <ul>
            <li className='text-black'>{/**<a href="/path/to/sound1.mp3"*>Sound 1</a>*/}Stromy Days</li>
            <li><a className='text-black' href="/path/to/sound2.mp3">Night Sounds</a></li>
            <li><a className='text-black' href="/path/to/sound3.mp3">Binaural</a></li>
            <li><a className='text-black' href="/path/to/sound4.mp3">LoFi Beat</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};


export default NavBar;
