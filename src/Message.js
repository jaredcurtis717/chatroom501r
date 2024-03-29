import React from "react";
import "./Message.css";

function Message({ message }) {
  return (
    <div className="message">
      <div className="message__info">
        {/* <h4>
          {user.displayName}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4> */}

        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;