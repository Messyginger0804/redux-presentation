// functions.js
import { startLoading, finishLoading, startPresentation } from './redux/presentationSlice';

export const handleStart = (dispatch) => {
  console.log("Start button clicked"); // Debugging log
  dispatch(startLoading()); // Set loading to true

  setTimeout(() => {
    dispatch(finishLoading()); // Set loading to false
    dispatch(startPresentation()); // Start the presentation and set currentSlide to 'slide1'
  }, 2000);
};
