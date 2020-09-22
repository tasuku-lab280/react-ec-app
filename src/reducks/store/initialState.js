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
    month: day.month() + 1,
    year: day.year(),
  },
  schedules: {
    form: {
      title: "",
      description: "",
      date: null,
      location: "",
    },
    isDialogOpen: false,
  },
};

export default initialState;
