import { createSlice } from '@reduxjs/toolkit';

export const messagesSlice = createSlice({
  name: 'messages',

  initialState: {
    value: []
  },

  reducers: {
    setMessages: (state, action) => {
      let temp = state.value;
      temp.push(action.payload);
      temp = temp.sort((a, b) => a - b);
      state.value = temp;
    }
  }
});

export const { setMessages, recieveMessages } = messagesSlice.actions;

export default messagesSlice.reducer;