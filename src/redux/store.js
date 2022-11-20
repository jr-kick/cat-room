import { configureStore } from "@reduxjs/toolkit";
import chatsReducer from "./chats";
import userReducer from './user';
import catsReducer from './cats';
import friendsReducer from './friends';
import fakeMsgReducer from "./fakeMsg";

export default configureStore({
  reducer: {
    user: userReducer,
    chats: chatsReducer,
    cats: catsReducer,
    friends: friendsReducer,
    fakeMsg: fakeMsgReducer
  }
});