// Slide5.jsx
import { useSelector, useDispatch } from 'react-redux';
import { revealNextBulletPoint } from '../redux/presentationSlice.js';
import img from '../assets/store.png'

const ReduxStore = () => {
  console.log("Slide5 component rendered - What is a Redux Store?");
  const dispatch = useDispatch();
  const visiblePoints = useSelector((state) => state.presentation.bulletPointsVisible.slide5);

  const bulletPoints = [
    "Provides a single source of truth",
    "Allows components to access state across the app",
    "Enables predictable updates by enforcing changes through actions and reducers",
  ];

  const handleContinueClick = () => {
    if (visiblePoints < bulletPoints.length) {
      dispatch(revealNextBulletPoint());
    }
  };

  return (
    // <div className='flex'>

    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">What is a Redux Store?</h1>
      <p className="text-lg md:text-xl text-center max-w-3xl leading-relaxed">
        The Redux <strong>store</strong> is the <em>central location</em> that holds the entire application state.
      </p>
      <p className="text-lg md:text-xl text-center max-w-3xl leading-relaxed mt-4">
        The store:
      </p>
      <ul className="text-lg md:text-xl text-center max-w-3xl leading-relaxed space-y-4">
        {bulletPoints.slice(0, visiblePoints).map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
        <img src={img} alt="img-of-store" />
      {visiblePoints < bulletPoints.length && (
        <button
          onClick={handleContinueClick}
          className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Continue
        </button>
      )}
    </div>
    // </div>
  );
};

export default ReduxStore;
