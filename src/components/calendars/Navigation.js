import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Toolbar, Typography, withStyles } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { DatePicker } from "@material-ui/pickers";
import Icon from "../../assets/images/calendar_icon.png";

import {
  getNextMonth,
  getPreviousMonth,
  getMonth,
  formatMonth,
} from "../../lib/calendar";
import { calendarSetMonth } from "../../reducks/calendars/actions";
import { getCalendar } from "../../reducks/calendars/selectors";

const StyledToolbar = withStyles({
  root: { padding: "0" },
})(Toolbar);

const StyledTypography = withStyles({
  root: { margin: "0 30px 0 10px" },
})(Typography);

const StyledDatePicker = withStyles({
  root: { marginLeft: 30 },
})(DatePicker);

const Navigation = () => {
  // dispatch selector
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const calendars = getCalendar(selector);
  console.log(calendars);

  // 前月のカレンダーを表示
  const setPreviousMonth = () => {
    const previousMonth = getPreviousMonth(calendars);
    dispatch(calendarSetMonth(previousMonth));
  };

  // 来月のカレンダーを表示
  const setNextMonth = () => {
    const nextMonth = getNextMonth(calendars);
    dispatch(calendarSetMonth(nextMonth));
  };

  // DatePicker
  const month = getMonth(calendars);
  const setMonth = (dayObj) => {
    const month = formatMonth(dayObj);
    dispatch(calendarSetMonth(month));
  };

  return (
    <StyledToolbar>
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <img src={Icon} alt="アイコン" width="40" height="40" />
      <StyledTypography color="textSecondary" variant="h5" component="h1">
        カレンダー
      </StyledTypography>
      <IconButton size="small" onClick={() => setPreviousMonth()}>
        <ArrowBackIos />
      </IconButton>
      <IconButton size="small" onClick={() => setNextMonth()}>
        <ArrowForwardIos />
      </IconButton>
      <StyledDatePicker
        value={month}
        onChange={setMonth}
        variant="inline"
        format="YYYY年 M月"
        animateYearScrolling
        disableToolbar
      />
    </StyledToolbar>
  );
};

export default Navigation;
