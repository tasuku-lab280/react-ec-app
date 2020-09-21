import * as Actions from "./actions";
import initialState from "../store/initialState";

export const calendarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CALENDAR_SET_MONTH:
      console.log(action.payload);
      return {
        ...state,
        calendars: action.payload,
      };
    default:
      return state;
  }
};
