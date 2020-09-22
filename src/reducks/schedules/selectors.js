import { createSelector } from "reselect";

const schedulesSelector = (state) => state.schedules;

export const getScheduleIsDialogOpen = createSelector(
  [schedulesSelector],
  (state) => state.schedules.isDialogOpen
);

export const getScheduleTitle = createSelector(
  [schedulesSelector],
  (state) => state.schedules.form.title
);

export const getScheduleDate = createSelector(
  [schedulesSelector],
  (state) => state.schedules.form.date
);

export const getScheduleDescription = createSelector(
  [schedulesSelector],
  (state) => state.schedules.form.description
);

export const getScheduleLocation = createSelector(
  [schedulesSelector],
  (state) => state.schedules.form.location
);
