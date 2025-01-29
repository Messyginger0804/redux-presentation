import { useSelector, useDispatch } from 'react-redux';
import { revealNextBulletPoint } from '../redux/presentationSlice.js';
import { useState } from 'react';
import img from '../assets/store.png';

const ReduxStore = () => {
  console.log("Slide5 component rendered - What is a Redux Store?");
  const dispatch = useDispatch();

  // Select the number of visible bullet points for slide5
  const visiblePoints = useSelector((state) => state.presentation.bulletPointsVisible.slide4);

  // Local state to manage the fullscreen image view
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  const bulletPoints = [
    "🧠 The Brain of Redux – The store acts as the brain of the Redux architecture, keeping everything organized.",
    "🔁 Follows a One-Way Data Flow – Data flows in a strict cycle: dispatch → reducer → new state.",
    "🎭 Decouples UI from Data – The UI doesn’t manage state directly; it reads from the store.",
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
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">What is a Redux Store?</h1>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-5xl w-full">
        {/* Bullet Points on the Left */}
        <div className="flex-1 text-lg md:text-xl text-left leading-relaxed space-y-4">
          <p>
            The Redux <strong>store</strong> is the <em>central location</em> that holds the entire application state.
          </p>
          <p className="mt-4">The store:</p>
          <ul className="list-disc list-inside space-y-4">
            {bulletPoints.slice(0, visiblePoints).map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Image on the Right */}
        <div
          className={`flex-1 mt-8 md:mt-0 md:ml-8 cursor-pointer ${isImageFullscreen ? 'fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center' : ''}`}
          onClick={toggleImageFullscreen}
        >
          <img
            src={img}
            alt="img-of-store"
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

export default ReduxStore;
