import * as Actions from "./actions";
import initialState from "../store/initialState";

export const chatMessagesReducer = (
  state = initialState.chat_messages,
  action
) => {
  switch (action.type) {
    case Actions.GET_CHAT_MESSAGES_REQUEST:
      return {
        // スプレッド構文は配列やオブジェクトを展開する、マージされる
        ...state,
        payload: [],
      };
    case Actions.GET_CHAT_MESSAGES_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.GET_CHAT_MESSAGES_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
};
