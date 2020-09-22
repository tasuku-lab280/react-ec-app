import * as Actions from "./actions";
import initialState from "../store/initialState";

export const schedulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_SCHEDULE_SET_TITLE:
      return {
        ...state,
        schedules: {
          form: {
            title: action.payload.title,
            description: state.schedules.form.description,
            date: state.schedules.form.date,
            location: state.schedules.form.location,
          },
          isDialogOpen: state.schedules.isDialogOpen,
        },
      };
    case Actions.ADD_SCHEDULE_SET_DATE:
      return {
        ...state,
        schedules: {
          form: {
            title: state.schedules.form.title,
            description: state.schedules.form.description,
            date: action.payload.date,
            location: state.schedules.form.location,
          },
          isDialogOpen: state.schedules.isDialogOpen,
        },
      };
    case Actions.ADD_SCHEDULE_SET_DESCRIPTION:
      return {
        ...state,
        schedules: {
          form: {
            title: state.schedules.form.title,
            description: action.payload.description,
            date: state.schedules.form.date,
            location: state.schedules.form.location,
          },
          isDialogOpen: state.schedules.isDialogOpen,
        },
      };
    case Actions.ADD_SCHEDULE_SET_LOCATION:
      return {
        ...state,
        schedules: {
          form: {
            title: state.schedules.form.title,
            description: state.schedules.form.description,
            date: state.schedules.form.date,
            location: action.payload.location,
          },
          isDialogOpen: state.schedules.isDialogOpen,
        },
      };
    case Actions.ADD_SCHEDULE_OPEN_DIALOG:
      return {
        ...state,
        schedules: {
          form: {
            title: state.schedules.form.title,
            description: state.schedules.form.description,
            date: state.schedules.form.date,
            location: state.schedules.form.location,
          },
          isDialogOpen: true,
        },
      };
    case Actions.ADD_SCHEDULE_CLOSE_DIALOG:
      return initialState;
    default:
      return state;
  }
};
