export const FETCH_CHAT_MESSAGES = "FETCH_CHAT_MESSAGES";
export const fetchChatMessagesAction = (chat_messages) => {
  return {
    type: FETCH_CHAT_MESSAGES,
    payload: chat_messages,
  };
};
