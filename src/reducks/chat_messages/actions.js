export const GET_CHAT_MESSAGES_SUCCESS = "GET_CHAT_MESSAGES_SUCCESS";
export const getChatMessagesSuccess = (data) => {
  return {
    type: GET_CHAT_MESSAGES_SUCCESS,
    data,
  };
};
