// Slide6.jsx
import { useSelector, useDispatch } from 'react-redux';
import { revealNextBulletPoint } from '../redux/presentationSlice.js';

const Reducers = () => {
  console.log("Slide6 component rendered - Understanding Reducers");
  const dispatch = useDispatch();
  const visiblePoints = useSelector((state) => state.presentation.bulletPointsVisible.slide6);

  const bulletPoints = [
    "Determine how the state should change in response to an action",
    "Are pure functions, meaning they do not modify the original state but return a new one",
    "Listen for specific action types and update parts of the state accordingly",
  ];

  const handleContinueClick = () => {
    if (visiblePoints < bulletPoints.length) {
      dispatch(revealNextBulletPoint());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Understanding Reducers</h1>
      <p className="text-lg md:text-xl text-center max-w-3xl leading-relaxed">
        In Redux, <strong>reducers</strong> are functions that take the current state and an action as input, and return the new state.
      </p>
      <p className="text-lg md:text-xl text-center max-w-3xl leading-relaxed mt-4">
        Reducers:
      </p>
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

export default Reducers;
