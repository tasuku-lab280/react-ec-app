import * as Actions from "./actions";
import initialState from "../store/initialState";

export const schedulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_SCHEDULE_SET_VALUE:
      return {
        ...state,
        form: { ...state.form, ...action.payload },
      };
    case Actions.ADD_SCHEDULE_OPEN_DIALOG:
      return {
        ...state,
        schedules: { isDialogOpen: true },
      };
    case Actions.ADD_SCHEDULE_CLOSE_DIALOG:
      return initialState;
    default:
      return state;
  }
};
