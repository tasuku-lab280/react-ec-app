import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Scrollbars } from "react-custom-scrollbars";
import { TextInput } from "../components/UIkit";
import Button from "@material-ui/core/Button";

import { ChatMessageItem, ChatRoomItem } from "../components/chat_messages";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const chat_room_id = 1;
  const user_id = 1;
  const [content, setContent] = useState("");
  console.log(messages);

  const inputContent = useCallback(
    (event) => {
      setContent(event.target.value);
    },
    [setContent]
  );

  // チャットメッセージ一覧取得
  const fetchChatMessages = async () => {
    const response = await axios.get("http://localhost:3000/api/chat_messages");
    console.log(response.data);
    setMessages(response.data);
  };

  // チャットメッセージ送信
  const createChatMessage = async (chat_room_id, user_id, content) => {
    if (content === "") return;
    const URL = `http://localhost:3000/api/chat_messages`;
    const response = await axios({
      method: "POST",
      url: URL,
      data: { chat_room_id, user_id, content },
    });
    console.log(response.data.data);
    setMessages((messages) => [...messages, response.data.data]);
    setContent("");
  };

  // チャットメッセージ削除
  const deleteChatMessage = async (id, index) => {
    const URL = `http://localhost:3000/api/chat_messages/${id}`;
    console.log(messages);
    const response = await axios({
      method: "DELETE",
      url: URL,
    });
    console.log(response.data);
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessages(newMessages);
  };

  // 最初のレンダー
  useEffect(() => {
    fetchChatMessages();
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
            messages.map((message, index) => (
              <ChatMessageItem
                key={index.toString()}
                index={index.toString()}
                id={message.id}
                user_id={message.user_id}
                user_name={message.user_name}
                content={message.content}
                deleteChatMessage={deleteChatMessage}
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
        <Button
          onClick={() => createChatMessage(chat_room_id, user_id, content)}
        >
          送信
        </Button>
      </div>
    </div>
  );
};

export default Chat;
