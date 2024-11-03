// Slide3.jsx
import { useSelector, useDispatch } from 'react-redux';
import { revealNextBulletPoint } from '../redux/presentationSlice.js';

const WhyUseRedux = () => {
  console.log("Slide3 component rendered - Reasons to Use Redux");
  const dispatch = useDispatch();
  const visiblePoints = useSelector((state) => state.presentation.bulletPointsVisible.slide3);

  const bulletPoints = [
    "🔄 Provides a single source of truth for application state",
    "📈 Simplifies state sharing across multiple components",
    "🛠️ Enables predictable and traceable state changes with actions",
    "🧩 Makes it easier to debug and track changes with dev tools",
  ];

  const handleContinueClick = () => {
    if (visiblePoints < bulletPoints.length) {
      dispatch(revealNextBulletPoint());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Why Use Redux?</h1>
      
      <ul className="text-lg md:text-xl text-center max-w-3xl leading-relaxed space-y-4">
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

export default WhyUseRedux;
