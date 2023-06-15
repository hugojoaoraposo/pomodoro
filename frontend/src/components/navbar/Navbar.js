import React, { useState } from "react";

import "./Navbar.css"

import user from "../../img/profileicon.png";
import clock from "../../img/tomato2.png";
import sound from "../../img/bgmusiclogo.png";
import muteIcon from "../../icons/soundmute.png";
import unmuteIcon from "../../icons/unmute.png";

import binaural from "../../audio/binaural.mp3";
import forest from "../../audio/forest.mp3";
import lofi from "../../audio/lofi.mp3";
import rain from "../../audio/rain.mp3";

const NavBar = ({ selected }) => {
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
      <span>
        <img src={user} width={45} alt="User Icon" />
      </span>
      <span>
        <img src={clock} width={45} alt="Clock Icon" />
      </span>
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
      )}
    </nav>
  );
};

export default NavBar;
