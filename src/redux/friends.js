import { createSlice } from '@reduxjs/toolkit';

export const friendsSlice = createSlice({
  name: 'friends',

  initialState: {
    value: []
  },

  reducers: {
    addFriend: (state, action) => {
      if (!state.value.includes(action.payload)) {
        state.value.push(action.payload);
      }
    }
  }
});

export const { addFriend } = friendsSlice.actions;

export default friendsSlice.reducer;