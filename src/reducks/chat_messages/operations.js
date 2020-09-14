import axios from "axios";
import {
  fetchChatMessagesAction,
  createChatMessageAction,
  deleteChatMessageAction,
} from "./actions";

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

export const createChatMessage = (chat_room_id, user_id, content) => {
  return async (dispatch) => {
    const URL = `http://localhost:3000/api/chat_messages`;
    await axios({
      method: "POST",
      url: URL,
      data: { chat_room_id, user_id, content },
    })
      .then((response) => {
        console.log(response);
        dispatch(createChatMessageAction(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const deleteChatMessage = (id) => {
  return async (dispatch) => {
    const URL = `http://localhost:3000/api/chat_messages/${id}`;
    await axios({
      method: "DELETE",
      url: URL,
    })
      .then((response) => {
        console.log(response);
        dispatch(deleteChatMessageAction(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
