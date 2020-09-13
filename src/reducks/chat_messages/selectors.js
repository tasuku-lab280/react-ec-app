import { createSelector } from "reselect";

const chatMessagesSelector = (state) => state.chat_messages;

export const getChatMessages = createSelector(
  [chatMessagesSelector],
  (state) => state.list
);
