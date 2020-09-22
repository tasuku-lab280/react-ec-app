import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GridList, Typography } from "@material-ui/core";

import {
  CalendarElement,
  Navigation,
  ScheduleDialog,
} from "../components/calendars/index";
import { createCalendar } from "../lib/calendar";
import { addScheduleOpenDialog } from "../reducks/schedules/actions";
import { getCalendar } from "../reducks/calendars/selectors";

const days = ["日", "月", "火", "水", "木", "金", "土"];

const Calendar = () => {
  // redux hooks
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const calendarState = getCalendar(selector);

  // カレンダーUIを作成
  const calendar = createCalendar(calendarState);
  const month = calendarState;

  return (
    <>
      <Navigation />
      <div className="container">
        <GridList className="grid" cols={7} spacing={0} cellHeight="auto">
          {days.map((d) => (
            <li key={d}>
              <Typography
                className="days"
                color="textSecondary"
                align="center"
                variant="caption"
                component="div"
              >
                {d}
              </Typography>
            </li>
          ))}
          {calendar.map((c) => (
            <li
              key={c.toISOString()}
              onClick={() => dispatch(addScheduleOpenDialog())}
            >
              <CalendarElement day={c} month={month} />
            </li>
          ))}
        </GridList>
      </div>
      <ScheduleDialog />
    </>
  );
};

export default Calendar;
