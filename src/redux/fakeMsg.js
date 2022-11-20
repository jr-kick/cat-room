import { createSlice } from '@reduxjs/toolkit';

export const fakeMsgSlice = createSlice({
  name: 'fakeMsg',

  initialState: {
    value: [
      {
        key: 2343243252,
        texts: [
          'eyo, watsup',
          'want some milk?',
          'ok i\'ll meet you at the usual spot at midnight',
          'be there',
          'bounce',
          'we already have the deal'
        ]
      },
      {
        key: 52352342,
        text: 'Through the years I have been known by many names. Diablo Gato, The Furry Lover, Chupa Cabra, Frisky Two Times and then The Gingerhead man. But to most I am Puss in Boots, outlaw!'
      },
      {
        key: 436324234,
        text: 'prr'
      }
    ]
  },

  reducers: {
    
  }
});

export const {  } = fakeMsgSlice.actions;

export default fakeMsgSlice.reducer;