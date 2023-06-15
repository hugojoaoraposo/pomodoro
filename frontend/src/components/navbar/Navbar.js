
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



import user from "../../img/usersuave.png";
import userdark from "../../img/userdark.png";
import tomatesuave from "../../img/tomatesuave.png";
import tomatedark from "../../img/tomatedark.png";
import sound from "../../img/somsuave.png";

import muteIcon from '../../icons/soundmute.png';
import unmuteIcon from '../../icons/unmute.png';


import binaural from '../../audio/binaural.mp3';
import forest from '../../audio/forest.mp3';
import lofi from '../../audio/lofi.mp3';
import rain from '../../audio/rain.mp3';


const NavBar = ({ pages }) => {
  const [selected, setSelected] = useState("profile");

  const [showPopup, setShowPopup] = useState(false);
  const handleClick = (page) => {
    setSelected(page);
  };

  useEffect(() => {
    handleClick();
  }, [selected]);

  const songs = [

    { id: 1, name: 'Rainy', url: rain },
    { id: 2, name: 'Forest', url: forest },
    { id: 3, name: 'Binaural', url: binaural },
    { id: 4, name: 'LoFi', url: lofi },

  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlayback = (index) => {
    if (currentSongIndex === index && isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentSongIndex(index);
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    setIsMuted((prevIsMuted) => !prevIsMuted);
  };
  return (
    <nav className="navbar-pomodoro">
      <Link to="/profile">

        <div onClick={() => handleClick("profile")}>
          <img
            src={selected === "profile" ? userdark : user}
            width={45}
            alt="User Icon"
          />
        </div>
      </Link>
      <Link to="/pomodoro">
        <div onClick={() => handleClick("pomodoro")}>
          <img
            src={selected === "pomodoro" ? tomatedark : tomatesuave}
            width={45}
            alt="Tomato Icon"
          />

        </div>
      </Link>
      <div className={`sound-icon ${showPopup ? 'active' : ''}`} onClick={() => setShowPopup(!showPopup)}>
        <img src={sound} width={45} alt="Sound Icon" />
      </div>

      {showPopup && (

  
      <div className={`mute-icon ${showPopup ? 'hidden' : ''}`}>
        <img
          className="mute-unmute"

        <div className="absolute popup border border-rose-700 mb-56 flex flex-col justify-center items-center right-4 rounded-md p-2 gap-4 bg-[#F58282]">
          <span className="text-black">
            {/**<a href="/path/to/sound1.mp3"*>Sound 1</a>*/}Stromy Days
          </span>
          <span>
            <a className="text-black" href="/path/to/sound2.mp3">
              Night Sounds
            </a>
          </span>
          <span>
            <a className="text-black" href="/path/to/sound3.mp3">
              Binaural
            </a>
          </span>
          <span>
            <a className="text-black" href="/path/to/sound4.mp3">
              LoFi Beat
            </a>
          </span>
        </div>
      )}
      {/*   
      <span>
        <img
          src={sound}
          width={45}
          alt="Sound Icon"
          onCspanck={togglePlayback}
        />
      </span>
      <span>
        <img className="mute-unmute"

          src={isMuted ? muteIcon : unmuteIcon}
          width={45}
          alt={isMuted ? 'Unmute' : 'Mute'}
          onClick={toggleMute}
        />
      </div>
  
      {currentSongIndex !== null && (
        <audio
          src={songs[currentSongIndex].url}
          autoPlay={isPlaying}
          onEnded={togglePlayback}
          onPause={() => setIsPlaying(false)}
          muted={isMuted}
        />
      )}
    </nav>
  );

  }


export default NavBar;
