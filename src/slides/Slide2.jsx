// Slide2.jsx
import { useSelector, useDispatch } from 'react-redux';
import { revealNextBulletPoint } from '../redux/presentationSlice.js';

const WhatIsState = () => {
  console.log("Slide2 component rendered - What is State?");
  const dispatch = useDispatch();
  const visiblePoints = useSelector((state) => state.presentation.bulletPointsVisible.slide2);

  const bulletPoints = [
    "State is essentially a variable that holds data within your application.",
    "It represents information that can change over time based on user actions or application events.",
    "State is used to manage what the user sees and interacts with, making your application dynamic.",
  ];

  const handleContinueClick = () => {
    if (visiblePoints < bulletPoints.length) {
      dispatch(revealNextBulletPoint());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">What is State?</h1>
      
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

export default WhatIsState;
