import * as Actions from "./actions";
import initialState from "../store/initialState";

export const chatMessagesReducer = (
  state = initialState.chat_messages,
  action
) => {
  switch (action.type) {
    case Actions.FETCH_CHAT_MESSAGES:
      return {
        ...state,
        list: action.payload,
      };
    case Actions.CREATE_CHAT_MESSAGE:
      return {
        ...state,
        list: action.payload,
      };
    case Actions.DELETE_CHAT_MESSAGE:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
