import React from "react";
import { useSelector } from "react-redux";
import { GridList, Typography } from "@material-ui/core";

import Navigation from "../components/Navigation";
import { createCalendar } from "../lib/calendar";
import CalendarElement from "../components/calendars/CalendarElement";
import { getCalendar } from "../reducks/calendars/selectors";

const calendar = createCalendar();
const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = () => {
  const selector = useSelector((state) => state);
  const calendars = getCalendar(selector);
  console.log(calendars);

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
              <CalendarElement day={c} />
            </li>
          ))}
        </GridList>
      </div>
    </>
  );
};

export default CalendarBoard;
