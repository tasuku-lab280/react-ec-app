export const FETCH_CHAT_MESSAGES = "FETCH_CHAT_MESSAGES";
export const fetchChatMessagesAction = (chat_messages) => {
  return {
    type: FETCH_CHAT_MESSAGES,
    payload: chat_messages,
  };
};

export const CREATE_CHAT_MESSAGES = "CREATE_CHAT_MESSAGES";
export const createChatMessagesAction = (chat_messages) => {
  return {
    type: CREATE_CHAT_MESSAGES,
    payload: chat_messages,
  };
};
