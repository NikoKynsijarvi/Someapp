import React, { useState } from "react";
import registerService from "./../services/register";
import "./../index.css";
import { Link } from "react-router-dom";
import Notification from "./Notification";

function RegisterForm({ message, setErrorMessage, className, setClassName }) {
  const [newUsername, setNewusername] = useState("");
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleUsernameChange = (event) => {
    setNewusername(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const hanleNewPassword = (event) => {
    setNewPassword(event.target.value);
  };

  const addNewUser = async (event) => {
    try {
      await registerService({
        newUsername,
        newName,
        newPassword,
      });
      setNewPassword("");
      setNewusername("");
      setNewName("");
      setClassName("success");
      setErrorMessage("User created !");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    } catch (exception) {
      console.log("Creation failed");
      setClassName("error");
      setErrorMessage("Something went wrong !");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <div className="registerContainer">
      <Notification message={message} className={className} />
      <div className="registerScreen">
        <h1 className="registerHeader">Create new user</h1>
        <form>
          <div className="registerContent">
            <div>
              username{" "}
              <input
                className="usernameInput"
                type="text"
                onChange={handleUsernameChange}
                value={newUsername}
              ></input>
            </div>
            <div>
              name{" "}
              <input
                className="nameInput"
                value={newName}
                onChange={handleNameChange}
              ></input>
            </div>
            <div>
              password{" "}
              <input
                className="passwordInput"
                value={newPassword}
                onChange={hanleNewPassword}
                type="password"
              ></input>
            </div>
          </div>
        </form>
        <div className="registerbuttons">
          <button className="loginButton" onClick={addNewUser}>
            Create
          </button>
          <Link to={"/"}>
            <button className="loginButton">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
