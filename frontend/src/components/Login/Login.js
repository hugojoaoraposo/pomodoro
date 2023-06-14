import React, { useState } from "react";
import ModalLogin from "./ModalLogin";
import "./Login.css";
import UserIcon from "../../icons/user.png";
import PasswordIcon from "../../icons/lock.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showImage, setShowImage] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleInputFocus = () => {
    setShowImage(false);
  };

  const handleInputBlur = () => {
    setShowImage(true);
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
            {showImage && <img className="icon" src={UserIcon} alt="User Icon" />}
            <input
              className="username"
              type="text"
              id="username"
              value={username}
              
              onChange={handleUsernameChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="Username"
            />
          </div>
          <div className="input-container">
            {showImage && <img className="icon" src={PasswordIcon} alt="Password Icon" />}
            <input
              className="password"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
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
