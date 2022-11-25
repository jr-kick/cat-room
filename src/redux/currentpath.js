import { createSlice } from '@reduxjs/toolkit';

export const currentpathSlice = createSlice({
  name: 'currentpath',

  initialState: {
    value: null
  },

  reducers: {
    setCurrentPath: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setCurrentPath } = currentpathSlice.actions;

export default currentpathSlice.reducer;