import { createSlice } from '@reduxjs/toolkit';

export const recievedSlice = createSlice({
  name: 'recieved',

  initialState: {
    value: false
  },

  reducers: {
    setRecieved: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setRecieved } = recievedSlice.actions;

export default recievedSlice.reducer;