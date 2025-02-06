// Slide7.jsx
import { useSelector, useDispatch } from 'react-redux';
import { revealNextBulletPoint } from '../redux/presentationSlice.js';
import { useState } from 'react';
import img from '../assets/useSelector.png'; // Import your image

const UseSelectorExplanation = () => {
  console.log("Slide7 component rendered - Understanding useSelector");
  const dispatch = useDispatch();
  const visiblePoints = useSelector((state) => state.presentation.bulletPointsVisible.slide7);

  // Local state to manage the fullscreen image view
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  const bulletPoints = [
    "useSelector is a hook provided by React-Redux to access the Redux store's state.",
    "It allows components to extract and use specific pieces of state from the store.",
    "By using useSelector, components can subscribe to changes in the Redux store and re-render when the selected state changes.",
    "You can access the state from a given piece of state by either dot notation or deconstruction.",
  ];

  const handleContinueClick = () => {
    if (visiblePoints < bulletPoints.length) {
      dispatch(revealNextBulletPoint());
    }
  };

  const toggleImageFullscreen = () => {
    setIsImageFullscreen(!isImageFullscreen);
  };

  return (
    <div className={`flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4 ${isImageFullscreen ? 'overflow-hidden' : ''}`}>
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">How Do You Get the State Out of the Store?</h1>

      {/* Bullet Points */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-5xl w-full">
        <ul className="flex-1 text-lg md:text-xl text-left leading-relaxed space-y-4 list-disc list-inside">
          {bulletPoints.slice(0, visiblePoints).map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        {/* Image on the Right */}
        <div
          className={`flex-1 mt-8 md:mt-0 md:ml-8 cursor-pointer ${isImageFullscreen ? 'fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center' : ''}`}
          onClick={toggleImageFullscreen}
        >
          <img
            src={img}
            alt="Image illustrating useSelector"
            className={`mt-8 w-full h-auto object-contain transition-transform duration-300 ${isImageFullscreen ? 'max-h-full max-w-full' : ''}`}
          />
        </div>
      </div>

      {/* Continue Button */}
      {visiblePoints < bulletPoints.length && (
        <button
          onClick={handleContinueClick}
          className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default UseSelectorExplanation;
