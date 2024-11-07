// presentationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSlide: null,
  loading: false,
  bulletPointsVisible: {
    slide1: 1,
    slide2: 1,
    slide3: 1,
    slide4: 1,
    slide5: 1,
    slide6: 1,
    slide7: 1,
  },
};


const presentationSlice = createSlice({
  name: 'presentation',
  initialState,
  reducers: {
    startPresentation: (state) => {
      state.currentSlide = 'slide1';
      console.log("Presentation started, showing slide1");
    },
    startLoading: (state) => {
      state.loading = true;
      console.log("Loading started");
    },
    finishLoading: (state) => {
      state.loading = false;
      console.log("Loading finished");
    },
    nextSlide: (state) => {
      const slideNumber = parseInt(state.currentSlide.replace('slide', ''));
      state.currentSlide = `slide${slideNumber + 1}`;
      console.log(`Transitioned to ${state.currentSlide}`);
      state.bulletPointsVisible[`slide${slideNumber + 1}`] = 1;
    },
    previousSlide: (state) => {
      const slideNumber = parseInt(state.currentSlide.replace('slide', ''));
      state.currentSlide = `slide${Math.max(1, slideNumber - 1)}`;
      console.log(`Transitioned to ${state.currentSlide}`);
      state.bulletPointsVisible[`slide${Math.max(1, slideNumber - 1)}`] = 1;
    },
    revealNextBulletPoint: (state) => {
      const slideKey = state.currentSlide;
      if (state.bulletPointsVisible[slideKey] < 8) {
        state.bulletPointsVisible[slideKey] += 1;
      }
      console.log(`Revealed bullet point ${state.bulletPointsVisible[slideKey]} on ${slideKey}`);
    },
  },
});

export const {
  startPresentation,
  startLoading,
  finishLoading,
  nextSlide,
  previousSlide,
  revealNextBulletPoint,
} = presentationSlice.actions;
export default presentationSlice.reducer;
