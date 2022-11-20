import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const chatsSlice = createSlice({
  name: 'chats',

  initialState: {
    value: []
  },

  reducers: {
    createChat: (state, action) => {
      state.value.push({chat_id: uniqid(), members: action.payload, messages: []});
      return
    },

    updateChat: (state, action) => {
      let index = state.value.findIndex(chat => chat.chat_id == action.payload.chat_id);
      state.value[index].messages.push(action.payload.message);
    }
  }
});

export const { createChat, updateChat } = chatsSlice.actions;

export default chatsSlice.reducer;