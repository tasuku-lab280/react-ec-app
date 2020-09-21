import React from "react";
import dayjs from "dayjs";
import { Typography } from "@material-ui/core";

import {
  isSameMonth,
  isFirstDay,
  isSameDay,
  getMonth,
} from "../../lib/calendar";

const CalendarElement = ({ day, month }) => {
  const today = dayjs();

  // 今月以外のテキストをグレーダウン
  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const textColor = isCurrentMonth ? "primary" : "textSecondary";

  // 文字列のフォーマットをどうするか、月の最初だけ月情報をつける
  const format = isFirstDay(day) ? "M月D日" : "D";

  // 当日かどうか判断
  const isToday = isSameDay(day, today);

  return (
    <div className="element">
      <Typography
        className="date"
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? "today" : ""}>{day.format(format)}</span>
      </Typography>
    </div>
  );
};

export default CalendarElement;
