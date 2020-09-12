import * as Actions from "./actions";
import initialState from "../store/initialState";

export const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        // スプレッド構文は配列やオブジェクトを展開する、マージされる
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
