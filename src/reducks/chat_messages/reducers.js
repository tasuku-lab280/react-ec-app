import * as Actions from "./actions";
import initialState from "../store/initialState";

export const chatMessagesReducer = (
  state = initialState.chat_messages,
  action
) => {
  switch (action.type) {
    case Actions.GET_CHAT_MESSAGES_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
