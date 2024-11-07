// Slide1.jsx
import { useSelector, useDispatch } from 'react-redux';
import { revealNextBulletPoint } from '../redux/presentationSlice.js';

const WhatisRedux = () => {
  console.log("Slide1 component rendered - What is Redux?");
  const dispatch = useDispatch();
  const visiblePoints = useSelector((state) => state.presentation.bulletPointsVisible.slide1);

  const bulletPoints = [
    "Redux is a state management system commonly used with JavaScript applications.",
    "Redux is often used with frameworks like React to manage global state effectively.",
    "It provides a single source of truth for the application state.",
    "It makes state interactions predictable through actions and reducers.",
  ];

  const handleContinueClick = () => {
    if (visiblePoints < bulletPoints.length) {
      dispatch(revealNextBulletPoint());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">What is Redux?</h1>
      
      <ul className="text-lg md:text-xl text-center max-w-3xl leading-relaxed space-y-4 list-disc list-inside">
        {bulletPoints.slice(0, visiblePoints).map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
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

export default WhatisRedux;
