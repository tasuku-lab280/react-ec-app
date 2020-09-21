import React from "react";
import { useSelector } from "react-redux";
import { GridList, Typography } from "@material-ui/core";

import Navigation from "../components/Navigation";
import CalendarElement from "../components/calendars/CalendarElement";
import { createCalendar } from "../lib/calendar";
import { getCalendar } from "../reducks/calendars/selectors";

const days = ["日", "月", "火", "水", "木", "金", "土"];

const Calendar = () => {
  // selector
  const selector = useSelector((state) => state);
  const calendarState = getCalendar(selector);
  console.log(calendarState);

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
            <li key={c.toISOString()}>
              <CalendarElement day={c} month={month} />
            </li>
          ))}
        </GridList>
      </div>
    </>
  );
};

export default Calendar;
