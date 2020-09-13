import axios from "axios";
import { fetchChatMessagesAction, createChatMessagesAction } from "./actions";

export const fetchChatMessages = () => {
  return async (dispatch) => {
    const URL = `http://localhost:3000/api/chat_messages`;
    await axios
      .get(URL)
      .then((response) => {
        dispatch(fetchChatMessagesAction(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const createChatMessages = (chat_room_id, user_id, content) => {
  return async (dispatch) => {
    const URL = `http://localhost:3000/api/chat_messages`;
    await axios({
      method: "POST",
      url: URL,
      data: { chat_room_id, user_id, content },
    })
      .then((response) => {
        console.log(response);
        dispatch(createChatMessagesAction(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
