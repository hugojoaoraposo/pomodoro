
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
import "./Navbar.css"

import user from "../../img/usersuave.png"
import userdark from "../../img/userdark.png"
import tomatesuave from "../../img/tomatesuave.png"
import tomatedark from "../../img/tomatedark.png"
import sound from "../../img/somsuave.png"

import muteIcon from "../../icons/soundmute.png";
import unmuteIcon from "../../icons/unmute.png";

import binaural from "../../audio/binaural.mp3";
import forest from "../../audio/forest.mp3";
import lofi from "../../audio/lofi.mp3";
import rain from "../../audio/rain.mp3";


const NavBar = ({pages}) => {
  const [selected, setSelected] = useState("profile");
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    setSelected((prevState) => pages);
  };

  useEffect(() => {
    handleClick();
  }, [selected]);

const songs = [
    { id: 1, name: "Song 1", url: binaural },
    { id: 2, name: "Song 2", url: forest },
    { id: 3, name: "Song 3", url: lofi },
    { id: 4, name: "Song 4", url: rain },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlayback = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const toggleMute = () => {
    setIsMuted((prevIsMuted) => !prevIsMuted);
  };

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
        <div className="popup">
          <h3>Select a background sound:</h3>
          <ul>
            <li><a href="/path/to/sound1.mp3">Sound 1</a></li>
            <li><a href="/path/to/sound2.mp3">Sound 2</a></li>
            <li><a href="/path/to/sound3.mp3">Sound 3</a></li>
            <li><a href="/path/to/sound4.mp3">Sound 4</a></li>
          </ul>

     <span>
        <img
          src={sound}
          width={45}
          alt="Sound Icon"
          onClick={togglePlayback}
        />
      </span>
      <span>
        <img className="mute-unmute"
          src={isMuted ? muteIcon : unmuteIcon}
          width={45}
          alt={isMuted ? "Unmute" : "Mute"}
          onClick={toggleMute}
        />
      </span>

      {currentSongIndex !== null && (
        <audio
          src={songs[currentSongIndex].url}
          autoPlay={isPlaying}
          onEnded={togglePlayback}
          onPause={() => setIsPlaying(false)}
          muted={isMuted}
        />

        </div>

      )}
    </nav>
  );
};

export default NavBar;
