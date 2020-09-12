import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { TextInput } from "../components/UIkit";
import Button from "@material-ui/core/Button";

const Chat = () => {
  const messages = [
    { user_id: 1, content: "メッセージ1" },
    { user_id: 2, content: "メッセージ2" },
    { user_id: 3, content: "メッセージ3" },
    { user_id: 3, content: "メッセージ3" },
    { user_id: 3, content: "メッセージ3" },
  ];
  return (
    <div className="flex">
      <div className="chat-rooms-menu">
        <Scrollbars>
          <ul className="chat-room-list-container">
            <li className="chat-room-list">
              <div className="chat-icon"></div>
              <span className="chat-room-name">チャットルーム1</span>
            </li>
            <li className="chat-room-list">
              <div className="chat-icon"></div>
              <span className="chat-room-name">チャットルーム1</span>
            </li>
            <li className="chat-room-list">
              <div className="chat-icon"></div>
              <span className="chat-room-name">チャットルーム1</span>
            </li>
            <li className="chat-room-list">
              <div className="chat-icon"></div>
              <span className="chat-room-name">チャットルーム1</span>
            </li>
            <li className="chat-room-list">
              <div className="chat-icon"></div>
              <span className="chat-room-name">チャットルーム1</span>
            </li>
            <li className="chat-room-list">
              <div className="chat-icon"></div>
              <span className="chat-room-name">チャットルーム1</span>
            </li>
            <li className="chat-room-list">
              <div className="chat-icon"></div>
              <span className="chat-room-name">チャットルーム1</span>
            </li>
            <li className="chat-room-list">
              <div className="chat-icon"></div>
              <span className="chat-room-name">チャットルーム1</span>
            </li>
          </ul>
        </Scrollbars>
      </div>
      <div className="chat-message-container">
        <Scrollbars>
          <ul>
            {messages.map((message, index) => (
              <div
                className={
                  message.user_id === 1
                    ? "my-message-container"
                    : "other-message-container"
                }
                key={index}
              >
                <span>{message.user_name}</span>
                <div
                  className={
                    message.user_id === 1
                      ? "my-message-content"
                      : "other-message-content"
                  }
                >
                  <span className="message-text">{message.content}</span>
                </div>
              </div>
            ))}
          </ul>
        </Scrollbars>
        <TextInput
          fullWidth={true}
          label={"メッセージを入力"}
          multiline={true}
          required={false}
          rows={5}
          // value={content}
          type={"text"}
          // onChange={inputPassword}
        />
        <Button>送信</Button>
      </div>
    </div>
  );
};

export default Chat;
