// Slide4.jsx
import { useSelector, useDispatch } from 'react-redux';
import { revealNextBulletPoint } from '../redux/presentationSlice.js';

const SettingUpRedux = () => {
  console.log("Slide4 component rendered - Setting Up Redux");
  const dispatch = useDispatch();
  const visiblePoints = useSelector((state) => state.presentation.bulletPointsVisible.slide4);

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

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Setting Up Redux</h1>
      <ol className="text-lg md:text-xl text-center max-w-3xl leading-relaxed space-y-4 list-decimal list-inside">
        {bulletPoints.slice(0, visiblePoints).map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ol>
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
