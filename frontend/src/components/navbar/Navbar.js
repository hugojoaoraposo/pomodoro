import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import user from "../../img/usersuave.png";
import userdark from "../../img/userdark.png";
import tomatesuave from "../../img/tomatesuave.png";
import tomatedark from "../../img/tomatedark.png";
import sound from "../../img/somsuave.png";

import muteIcon from "../../icons/soundmute.png";
import unmuteIcon from "../../icons/unmute.png";

import binaural from "../../audio/binaural.mp3";
import forest from "../../audio/forest.mp3";
import lofi from "../../audio/lofi.mp3";
import rain from "../../audio/rain.mp3";

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
    { id: 1, name: "Binaural", url: binaural },
    { id: 2, name: "Forest", url: forest },
    { id: 3, name: "LoFi", url: lofi },
    { id: 4, name: "Rainy", url: rain },
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
  
  const handleSongClick = (songId) => {
    if (currentSongIndex === songId - 1) {
      // Pause the currently playing song if it's the same as the clicked song
      setIsPlaying(false);
    } else {
      // Play the clicked song
      setCurrentSongIndex(songId - 1);
      setIsPlaying(true);
    }
  };
  
  useEffect(() => {
    const audioElement = new Audio(songs[currentSongIndex].url);
    audioElement.muted = isMuted;
  
    const playAudio = () => {
      if (isPlaying) {
        const playPromise = audioElement.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Playback started successfully
            })
            .catch((error) => {
              // Error occurred while starting playback
              console.log(error);
            });
        }
      } else {
        audioElement.pause();
      }
    };
  
    playAudio();
  
    return () => {
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, [currentSongIndex, isPlaying, isMuted]);

  return (
    <nav className="flex items-center justify-center gap-10 bg-none h-16 text-white fixed bottom-0 w-full">
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
      <div onClick={() => setShowPopup(!showPopup)}>
        <img src={sound} width={45} alt="Sound Icon" />
      </div>

      {showPopup && (
        <div className="absolute popup border border-rose-700 mb-56 flex flex-col justify-center items-center right-4 rounded-md p-2 gap-4 bg-[#F58282]">
          {songs.map((song) => (
            <span key={song.id}>
              <a
                className={`text-black ${currentSongIndex === song.id - 1 ? "playing" : ""}`}
                href={song.url}
                onClick={(e) => {
                  e.preventDefault();
                  handleSongClick(song.id);
                }}
              >
                {song.name}
              </a>
            </span>
          ))}
        </div>
      )}

      <div className="fixed bottom-0 right-0 m-4">
        <button onClick={toggleMute}>
          <img src={isMuted ? muteIcon : unmuteIcon} width={24} className="mute-button" alt={isMuted ? "Unmute" : "Mute"} />
        </button>
      </div>
    </nav>
  );;
};

export default NavBar;

