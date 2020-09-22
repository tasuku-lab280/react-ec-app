import * as Actions from "./actions";
import initialState from "../store/initialState";

export const addSchedulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_SCHEDULE_SET_TITLE:
      return {
        ...state,
        add_schedules: {
          form: {
            title: action.payload.title,
            description: state.add_schedules.form.description,
            date: state.add_schedules.form.date,
            location: state.add_schedules.form.location,
          },
          isDialogOpen: state.add_schedules.isDialogOpen,
        },
      };
    case Actions.ADD_SCHEDULE_SET_DATE:
      return {
        ...state,
        add_schedules: {
          form: {
            title: state.add_schedules.form.title,
            description: state.add_schedules.form.description,
            date: action.payload.date,
            location: state.add_schedules.form.location,
          },
          isDialogOpen: state.add_schedules.isDialogOpen,
        },
      };
    case Actions.ADD_SCHEDULE_SET_DESCRIPTION:
      return {
        ...state,
        add_schedules: {
          form: {
            title: state.add_schedules.form.title,
            description: action.payload.description,
            date: state.add_schedules.form.date,
            location: state.add_schedules.form.location,
          },
          isDialogOpen: state.add_schedules.isDialogOpen,
        },
      };
    case Actions.ADD_SCHEDULE_SET_LOCATION:
      return {
        ...state,
        add_schedules: {
          form: {
            title: state.add_schedules.form.title,
            description: state.add_schedules.form.description,
            date: state.add_schedules.form.date,
            location: action.payload.location,
          },
          isDialogOpen: state.add_schedules.isDialogOpen,
        },
      };
    case Actions.ADD_SCHEDULE_OPEN_DIALOG:
      return {
        ...state,
        add_schedules: {
          form: {
            title: state.add_schedules.form.title,
            description: state.add_schedules.form.description,
            date: state.add_schedules.form.date,
            location: state.add_schedules.form.location,
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
