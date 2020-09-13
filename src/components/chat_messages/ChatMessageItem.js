import React from "react";

const ChatMessageItem = (props) => {
  return (
    <div
      className={
        props.user_id === 1 ? "my-message-container" : "other-message-container"
      }
      key={props.index}
    >
      <span>{props.user_name}</span>
      <div
        className={
          props.user_id === 1 ? "my-message-content" : "other-message-content"
        }
      >
        <span className="message-text">{props.content}</span>
      </div>
    </div>
  );
};

export default ChatMessageItem;
