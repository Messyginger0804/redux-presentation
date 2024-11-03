// presentationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSlide: null, // No slide is shown at the start
  loading: false,
  bulletPointsVisible: {
    slide1: 1, // Start with the first bullet point visible
    slide2: 1, // Similarly for Slide 2
    slide3: 1, // And Slide 3
  },
};

const presentationSlice = createSlice({
  name: 'presentation',
  initialState,
  reducers: {
    startPresentation: (state) => {
      state.currentSlide = 'slide1'; // Start the presentation with Slide 1
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
      // Reset bullet points for the new slide
      state.bulletPointsVisible[`slide${slideNumber + 1}`] = 1;
    },
    previousSlide: (state) => {
      const slideNumber = parseInt(state.currentSlide.replace('slide', ''));
      state.currentSlide = `slide${Math.max(1, slideNumber - 1)}`;
      console.log(`Transitioned to ${state.currentSlide}`);
      // Reset bullet points for the previous slide
      state.bulletPointsVisible[`slide${Math.max(1, slideNumber - 1)}`] = 1;
    },
    revealNextBulletPoint: (state) => {
      const slideKey = state.currentSlide;
      if (state.bulletPointsVisible[slideKey] < 4) { // Assuming each slide has up to 4 bullet points
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
