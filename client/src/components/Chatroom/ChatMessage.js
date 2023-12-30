// ChatMessage.jsx

import React from "react";
import "./Chat.css";

const ChatMessage = ({ name, message, currentUser, timestamp }) => {
  const isCurrentUser = name === currentUser;
  const messageClass = isCurrentUser
    ? "current-user-message"
    : "other-user-message";

  return (
    <div className={`chat-message ${messageClass}`}>
      <div className="chat-message-header">
        <strong>{name}</strong>
        <span className="message-timestamp">{timestamp}</span>
      </div>
      <div className="chat-message-body">{message}</div>
    </div>
  );
};

export default ChatMessage;
