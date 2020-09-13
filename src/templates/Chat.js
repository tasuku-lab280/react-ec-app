import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatMessages } from "../reducks/chat_messages/operations";
import { getChatMessages } from "../reducks/chat_messages/selectors";
import { Scrollbars } from "react-custom-scrollbars";
import { TextInput } from "../components/UIkit";
import Button from "@material-ui/core/Button";
import { ChatMessageItem, ChatRoomItem } from "../components/chat_messages";

const Chat = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const messages = getChatMessages(selector);

  useEffect(() => {
    dispatch(fetchChatMessages());
  }, []);

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
        <Scrollbars>
          {messages.length > 0 &&
            messages.map((message) => (
              <ChatMessageItem
                key={message.id}
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
          // onChange={inputPassword}
        />
        <Button onClick={() => dispatch(fetchChatMessages())}>送信</Button>
      </div>
    </div>
  );
};

export default Chat;
