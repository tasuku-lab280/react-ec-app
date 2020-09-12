import axios from "axios";
import { getChatMessagesSuccess } from "./actions";

export const fetchChatMessages = () => {
  return async (dispatch) => {
    try {
      const URL = `http://localhost:3000/api/chat_messages`;
      const response = await axios.get(URL);
      const data = response.data;
      console.log(data);
      dispatch(getChatMessagesSuccess(data));
    } catch (error) {
      console.error(error);
    }
  };
};
