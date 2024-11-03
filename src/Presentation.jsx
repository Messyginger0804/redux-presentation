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
import Introduction from './Intro';
import LoadingScreen from './LoadingScreen';

const Presentation = () => {
  const { currentSlide, loading } = useSelector((state) => state.presentation);
  const dispatch = useDispatch();

  // Function to handle moving to the next slide and resetting bullet points
  const handleNextSlide = () => {
    dispatch(nextSlide()); // Move to the next slide
  };

  // Function to decide which slide component to render
  const renderSlide = () => {
    switch (currentSlide) {
      case 'intro':
        return <Introduction onStart={() => handleStart(dispatch)} />;
      case 'slide1':
        return <Slide1 />;
      case 'slide2':
        return <Slide2 />;
      case 'slide3':
        return <Slide3 />;
      case 'slide4':
        return <Slide4 />;
      case 'slide5':
        return <Slide5 />;
      case 'slide6':
        return <Slide6 />;
      default:
        return <Introduction onStart={() => handleStart(dispatch)} />;
    }
  };

  return (
    <div>
      {loading ? <LoadingScreen /> : renderSlide()}

      {/* Conditional Rendering of Navigation Buttons */}
      {currentSlide !== 'intro' && (
        <div className="fixed bottom-8 left-8">
          <button
            onClick={() => dispatch(previousSlide())}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg mr-4"
          >
            Previous
          </button>
          <button
            onClick={handleNextSlide} // Use the new handleNextSlide function
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
