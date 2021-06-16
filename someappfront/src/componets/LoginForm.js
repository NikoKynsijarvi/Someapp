import React from "react";
import "./../index.css";
import { Link } from "react-router-dom";
import Notification from "./Notification";

const LoginForm = ({
  handleLogin,
  password,
  username,
  setPassword,
  setUsername,
  message,
  className,
}) => {
  return (
    <div>
      <div className="loginContainer">
        <Notification message={message} className={className} />
        <div className="loginScreen">
          <h2 className="loginHeader">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="loginContent">
              <div>
                username
                <input
                  className="usernameInput"
                  type="text"
                  value={username}
                  name="Username"
                  onChange={({ target }) => setUsername(target.value)}
                />
              </div>
              <div>
                password
                <input
                  className="passwordInput"
                  type="password"
                  value={password}
                  name="Password"
                  onChange={({ target }) => setPassword(target.value)}
                />
              </div>
              <div className="loginbuttons">
                <button className="loginButton" type="submit">
                  login
                </button>
              </div>
            </div>
          </form>
          <Link to={"/createuser"}>
            <button className="loginButton" onClick={() => console.log("")}>
              create new
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
