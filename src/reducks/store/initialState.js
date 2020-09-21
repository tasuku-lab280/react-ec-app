import dayjs from "dayjs";
const day = dayjs();

// アプリに必要なstateを全て記述する
const initialState = {
  users: {
    isSignedIn: false,
    role: "",
    uid: "",
    username: "",
  },
  products: {
    list: [],
  },
  chat_messages: {
    list: [],
  },
  calendars: {
    year: day.year(),
    month: day.month() + 1,
  },
};

export default initialState;
