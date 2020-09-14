export const FETCH_CHAT_MESSAGES = "FETCH_CHAT_MESSAGES";
export const fetchChatMessagesAction = (chat_messages) => {
  return {
    type: FETCH_CHAT_MESSAGES,
    payload: chat_messages,
  };
};

export const CREATE_CHAT_MESSAGE = "CREATE_CHAT_MESSAGE";
export const createChatMessageAction = (chat_message) => {
  return {
    type: CREATE_CHAT_MESSAGE,
    payload: chat_message,
  };
};

export const DELETE_CHAT_MESSAGE = "DELETE_CHAT_MESSAGE";
export const deleteChatMessageAction = (chat_message) => {
  return {
    type: DELETE_CHAT_MESSAGE,
    payload: chat_message,
  };
};
