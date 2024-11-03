// store.js
import { configureStore } from '@reduxjs/toolkit';
import presentationReducer from './presentationSlice';

const store = configureStore({
  reducer: {
    presentation: presentationReducer,
  },
});

export default store;
