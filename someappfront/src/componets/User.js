import React from "react";
import "./../index.css";
import { Link } from "react-router-dom";

function UserInfo({ user }) {
  return (
    <div className="userContainer">
      <div className="userScreen">
        <h1>{user.username}</h1>
        <div>
          username: <label className="userLabel">{user.username}</label>
        </div>
        <div>
          name: <label className="userLabel">{user.name}</label>
        </div>
        <Link to={"/"}>
          <button className="backButton">back</button>
        </Link>
      </div>
    </div>
  );
}

export default UserInfo;
