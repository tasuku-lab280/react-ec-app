export const ADD_SCHEDULE_SET_TITLE = "ADD_SCHEDULE_SET_TITLE";
export const ADD_SCHEDULE_SET_DATE = "ADD_SCHEDULE_SET_DATE";
export const ADD_SCHEDULE_SET_DESCRIPTION = "ADD_SCHEDULE_SET_DESCRIPTION";
export const ADD_SCHEDULE_SET_LOCATION = "ADD_SCHEDULE_SET_LOCATION";
export const ADD_SCHEDULE_OPEN_DIALOG = "ADD_SCHEDULE_OPEN_DIALOG";
export const ADD_SCHEDULE_CLOSE_DIALOG = "ADD_SCHEDULE_CLOSE_DIALOG";

export const addScheduleSetTitle = (payload) => ({
  type: ADD_SCHEDULE_SET_TITLE,
  payload,
});

export const addScheduleSetDate = (payload) => ({
  type: ADD_SCHEDULE_SET_DATE,
  payload,
});

export const addScheduleSetDescription = (payload) => ({
  type: ADD_SCHEDULE_SET_DESCRIPTION,
  payload,
});

export const addScheduleSetLocation = (payload) => ({
  type: ADD_SCHEDULE_SET_LOCATION,
  payload,
});

export const addScheduleOpenDialog = () => ({
  type: ADD_SCHEDULE_OPEN_DIALOG,
});

export const addScheduleCloseDialog = () => ({
  type: ADD_SCHEDULE_CLOSE_DIALOG,
});
