import axios from "axios";
import {
  getChatMessagesRequest,
  getChatMessagesSuccess,
  getChatMessagesFailure,
} from "./actions";

export const fetchChatMessages = () => {
  return async (dispatch) => {
    dispatch(getChatMessagesRequest());
    return await axios
      .get(`http://localhost:3000/api/chat_messages`)
      .then((res) => dispatch(getChatMessagesSuccess(res.data)))
      .catch((err) => dispatch(getChatMessagesFailure(err)));
  };
};
