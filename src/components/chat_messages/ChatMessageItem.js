import React from "react";
import { useDispatch } from "react-redux";
import { deleteChatMessage } from "../../reducks/chat_messages/operations";

const ChatMessageItem = (props) => {
  const dispatch = useDispatch();

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
      <button
        className="delete-btn"
        onClick={() => dispatch(deleteChatMessage(props.id))}
      >
        削除
      </button>
    </div>
  );
};

export default ChatMessageItem;
