import axios from "axios";
import { fetchChatMessagesAction } from "./actions";

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
