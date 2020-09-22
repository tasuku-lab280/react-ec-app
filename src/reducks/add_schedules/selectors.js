import { createSelector } from "reselect";

const addSchedulesSelector = (state) => state.add_schedules;

export const getScheduleIsDialogOpen = createSelector(
  [addSchedulesSelector],
  (state) => state.add_schedules.isDialogOpen
);

export const getScheduleTitle = createSelector(
  [addSchedulesSelector],
  (state) => state.add_schedules.form.title
);

export const getScheduleDate = createSelector(
  [addSchedulesSelector],
  (state) => state.add_schedules.form.date
);

export const getScheduleDescription = createSelector(
  [addSchedulesSelector],
  (state) => state.add_schedules.form.description
);

export const getScheduleLocation = createSelector(
  [addSchedulesSelector],
  (state) => state.add_schedules.form.location
);
