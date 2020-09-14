import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { TextInput } from "../components/UIkit";
import Button from "@material-ui/core/Button";

import { fetchChatMessages } from "../reducks/chat_messages/operations";
import { createChatMessage } from "../reducks/chat_messages/operations";
import { getChatMessages } from "../reducks/chat_messages/selectors";
import { ChatMessageItem, ChatRoomItem } from "../components/chat_messages";

const Chat = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const messages = getChatMessages(selector);

  const chat_room_id = 1;
  const user_id = 1;
  const [content, setContent] = useState("");

  const inputContent = useCallback(
    (event) => {
      setContent(event.target.value);
    },
    [setContent]
  );

  const resetInputField = () => {
    setContent("");
  };

  const createMessage = () => {
    dispatch(createChatMessage(chat_room_id, user_id, content));
    resetInputField();
  };

  useEffect(() => {
    dispatch(fetchChatMessages());
  }, []);

  useEffect(() => {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });

  return (
    <div className="flex">
      <div className="chat-rooms-menu">
        <Scrollbars>
          <ul className="chat-room-list-container">
            <ChatRoomItem />
          </ul>
        </Scrollbars>
      </div>
      <div className="chat-message-container">
        <Scrollbars id={"scroll-area"}>
          {messages.length > 0 &&
            messages.map((message) => (
              <ChatMessageItem
                key={message.id}
                id={message.id}
                user_id={message.user_id}
                user_name={message.user_name}
                content={message.content}
              />
            ))}
        </Scrollbars>
        <TextInput
          fullWidth={true}
          label={"メッセージを入力"}
          multiline={true}
          required={false}
          rows={5}
          // value={content}
          type={"text"}
          onChange={inputContent}
        />
        <Button onClick={() => createMessage()}>送信</Button>
      </div>
    </div>
  );
};

export default Chat;
