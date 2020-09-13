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
};

export default initialState;
