import { createSelector } from "reselect";

const calendarsSelector = (state) => state.calendars;

export const getCalendar = createSelector(
  [calendarsSelector],
  (state) => state.calendars
);
