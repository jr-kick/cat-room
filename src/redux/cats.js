import { createSlice } from '@reduxjs/toolkit';
import mrJinks from '../Images/Mr. Jinks.jpg';
import puss from '../Images/Puss.jpg';
import prr from '../Images/prr.jpg';

export const catsSlice = createSlice({
  name: 'cats',

  initialState: {
    value: [
      {
        name: 'Mr. Jinks',
        avatar: mrJinks,
        key: 2343243252
      },
      {
        name: 'Puss',
        avatar: puss,
        key: 52352342
      },
      {
        name: 'prr',
        avatar: prr,
        key: 436324234
      }
    ]
  },

  reducers: {
    
  }
});

export const {  } = catsSlice.actions;

export default catsSlice.reducer;