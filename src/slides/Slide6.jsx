import { useSelector, useDispatch } from 'react-redux';
import { revealNextBulletPoint } from '../redux/presentationSlice.js';
import { useState } from 'react';
import img from '../assets/reducers.png'; // Import your image

const Reducers = () => {
  console.log("Slide6 component rendered - Understanding Reducers");
  const dispatch = useDispatch();
  const visiblePoints = useSelector((state) => state.presentation.bulletPointsVisible.slide6);

  // Local state to manage the fullscreen image view
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  const bulletPoints = [
    "Determine how the state should change in response to an action",
    "Are pure functions, meaning they do not modify the original state but return a new one",
    "Listen for specific action types and update parts of the state accordingly",
    "Contain the logic to decide how different actions transform the state",
    "Make state updates predictable, making it easier to debug and test",
    "Should not perform side effects, such as API calls or modifying variables outside their scope",
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
    <div
      className={`flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4 ${
        isImageFullscreen ? 'overflow-hidden' : 'overflow-auto'
      }`}
    >
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Understanding Reducers
      </h1>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-5xl w-full">
        {/* Bullet Points on the Left */}
        <div className="flex-1 text-lg md:text-xl text-left leading-relaxed space-y-4">
          <p>
            In Redux, <strong>reducers</strong> are functions that take the current state and an action as input, and return the new state.
          </p>
          <p className="mt-4">Reducers:</p>
          <ul className="list-disc list-inside space-y-4">
            {bulletPoints.slice(0, visiblePoints).map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Image on the Right */}
        <div
          className={`flex-1 mt-8 md:mt-0 md:ml-8 cursor-pointer ${
            isImageFullscreen
              ? 'fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center'
              : ''
          }`}
          onClick={toggleImageFullscreen}
        >
          <img
            src={img}
            alt="Image illustrating reducers"
            className={`w-full h-auto object-contain transition-transform duration-300 ${
              isImageFullscreen ? 'max-h-full max-w-full' : ''
            }`}
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

export default Reducers;
