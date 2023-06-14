import React, { useState } from "react";
import ModalLogin from "./ModalLogin";
import "./Login.css";
import UserIcon from "../../icons/user.png";
import PasswordIcon from "../../icons/lock.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showUsernameIcon, setShowUsernameIcon] = useState(true);
  const [showPasswordIcon, setShowPasswordIcon] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameFocus = () => {
    setShowUsernameIcon(false);
  };

  const handleUsernameBlur = () => {
    setShowUsernameIcon(true);
  };

  const handlePasswordFocus = () => {
    setShowPasswordIcon(false);
  };

  const handlePasswordBlur = () => {
    setShowPasswordIcon(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-inputs">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            {showUsernameIcon && <img className="icon" src={UserIcon} alt="User Icon" />}
            <input
              className="username"
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              onFocus={handleUsernameFocus}
              onBlur={handleUsernameBlur}
              placeholder="Username"
            />
          </div>
          <div className="input-container">
            {showPasswordIcon && <img className="icon" src={PasswordIcon} alt="Password Icon" />}
            <input
              className="password"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              placeholder="Password"
            />
          </div>
        </form>
        <ModalLogin />
      </div>
    </div>
  );
}

export default Login;
