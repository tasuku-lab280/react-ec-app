export const GET_CHAT_MESSAGES_REQUEST = "GET_CHAT_MESSAGES_REQUEST";
export const getChatMessagesRequest = () => {
  return {
    type: GET_CHAT_MESSAGES_REQUEST,
  };
};

export const GET_CHAT_MESSAGES_SUCCESS = "GET_CHAT_MESSAGES_SUCCESS";
export const getChatMessagesSuccess = (data) => {
  return {
    type: GET_CHAT_MESSAGES_SUCCESS,
    payload: data,
  };
};

export const GET_CHAT_MESSAGES_FAILURE = "GET_CHAT_MESSAGES_FAILURE";
export const getChatMessagesFailure = (error) => {
  return {
    type: GET_CHAT_MESSAGES_FAILURE,
    error,
  };
};
