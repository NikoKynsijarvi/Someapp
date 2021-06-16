import React from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Notification = ({ message, className }) => {
  if (message === null) {
    return null;
  }

  if (className === "error") {
    return (
      <div className="error">
        <ImCross className="notificationIcon" />
        <div>
          <h1 className="notificationHeader">Error!</h1>
          <p>{message}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="success">
        <FaCheck className="checkIcon" />
        <div>
          <h1 className="successHeader">Success!</h1>
          <p>{message}</p>
        </div>
      </div>
    );
  }
};

export default Notification;
