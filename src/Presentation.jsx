// Presentation.jsx
import { useSelector, useDispatch } from 'react-redux';
import { handleStart } from './functions';
import { nextSlide, previousSlide } from './redux/presentationSlice';

import Slide1 from './slides/Slide1'; // What is Redux?
import Slide2 from './slides/Slide2'; // What is State?
import Slide3 from './slides/Slide3'; // Reasons to Use Redux
import Slide4 from './slides/Slide4'; // Setting Up Redux
import Slide5 from './slides/Slide5'; // What is a Redux Store?
import Slide6 from './slides/Slide6'; // Understanding Reducers
import Slide7 from './slides/Slide7'; // Explaining useSelector
import Slide8 from './slides/Slide8'; // Understanding useDispatch

import Introduction from './Intro';
import LoadingScreen from './LoadingScreen';

const Presentation = () => {
  const { currentSlide, loading } = useSelector((state) => state.presentation);
  const dispatch = useDispatch();

  // Function to handle moving to the next slide
  const handleNextSlide = () => {
    dispatch(nextSlide());
  };

  // Function to decide which slide component to render
  const renderSlide = () => {
    switch (currentSlide) {
      case 'intro':
        return <Introduction onStart={() => handleStart(dispatch)} />;
      case 'slide1':
        return <Slide1 />; // What is Redux?
      case 'slide2':
        return <Slide2 />; // What is State?
      case 'slide3':
        return <Slide3 />; // Reasons to Use Redux
      case 'slide4':
        return <Slide4 />; // Setting Up Redux
      case 'slide5':
        return <Slide5 />; // What is a Redux Store?
      case 'slide6':
        return <Slide6 />; // Understanding Reducers
      case 'slide7':
        return <Slide7 />; // Explaining useSelector
      case 'slide8':
        return <Slide8 />; // Understanding useDispatch
      default:
        return <Introduction onStart={() => handleStart(dispatch)} />;
    }
  };

  return (
    <div>
      {loading ? <LoadingScreen /> : renderSlide()}

      {/* Navigation Buttons */}
      {currentSlide !== 'intro' && (
        <div className="fixed bottom-8 left-8">
          <button
            onClick={() => dispatch(previousSlide())}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg mr-4"
          >
            Previous
          </button>
          <button
            onClick={handleNextSlide}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Presentation;
