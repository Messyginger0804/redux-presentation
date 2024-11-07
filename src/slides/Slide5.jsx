import { useSelector, useDispatch } from 'react-redux';
import { revealNextBulletPoint } from '../redux/presentationSlice.js';
import { useState } from 'react';
import img from '../assets/setting-up-redux.png'; // Example image

const SettingUpRedux = () => {
  console.log("Slide4 component rendered - Setting Up Redux");
  const dispatch = useDispatch();
  const visiblePoints = useSelector((state) => state.presentation.bulletPointsVisible.slide4);

  // Local state to manage the fullscreen image view
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  const bulletPoints = [
    <>
      Install Redux and React-Redux:
      <code className="bg-gray-800 text-green-400 p-1 rounded"> npm install @reduxjs/toolkit react-redux </code>
    </>,
    "Create a Redux slice using the Redux Toolkit, which contains the initial state, reducers, and actions.",
    "Configure the Redux store with the slice reducer.",
    "Wrap your application in a Provider component to pass down the store.",
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
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Setting Up Redux</h1>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-5xl w-full">
        {/* Bullet Points on the Left */}
        <div className="flex-1 text-lg md:text-xl text-left leading-relaxed space-y-4">
          <ol className="list-decimal list-inside space-y-4">
            {bulletPoints.slice(0, visiblePoints).map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ol>
        </div>

        {/* Image on the Right */}
        <div
          className={`flex-1 mt-8 md:mt-0 md:ml-8 cursor-pointer ${isImageFullscreen ? 'fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center' : ''}`}
          onClick={toggleImageFullscreen}
        >
          <img
            src={img}
            alt="Setting up Redux illustration"
            className={`w-full h-auto object-contain transition-transform duration-300 ${isImageFullscreen ? 'max-h-full max-w-full' : ''}`}
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

export default SettingUpRedux;
