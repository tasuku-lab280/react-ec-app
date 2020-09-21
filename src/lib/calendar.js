import dayjs from "dayjs";

// その月のdayjsインスタンスを返す
export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};

// 来月を取得
export const getNextMonth = (month) => {
  const day = getMonth(month).add(1, "month");
  return formatMonth(day);
};

// 前月を取得
export const getPreviousMonth = (month) => {
  const day = getMonth(month).add(-1, "month");
  return formatMonth(day);
};

// 年月のオブジェクトを作成
export const formatMonth = (day) => ({
  month: day.month() + 1,
  year: day.year(),
});

// カレンダーUIを作成
export const createCalendar = (month) => {
  const firstDay = getMonth(month);
  const firstDayIndex = firstDay.day();

  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");

      return day;
    });
};

// 当日かどうか
export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
};

// 当月かどうか
export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};

// 月初かどうか
export const isFirstDay = (day) => day.date() === 1;
