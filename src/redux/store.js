import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./messages";
import userReducer from './user';

export default configureStore({
  reducer: {
    user: userReducer,
    messages: messagesReducer
  }
});