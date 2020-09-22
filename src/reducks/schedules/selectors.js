import { createSelector } from "reselect";

const schedulesSelector = (state) => state.schedules;

export const getSchedule = createSelector(
  [schedulesSelector],
  (state) => state.schedules.isDialogOpen
);
