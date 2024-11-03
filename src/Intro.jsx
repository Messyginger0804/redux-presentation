// Introduction.jsx
import React from 'react';
import linkedin from './assets/linkedinQR.jpg';

const Introduction = ({ onStart }) => (
  <div className="flex items-center justify-center h-screen bg-black">
    <div className="relative w-full h-full flex flex-col items-center justify-center max-w-screen-md">
      <img src={linkedin} alt="LinkedIn QR Code" className="w-full h-full object-contain" />
      
      <button
        onClick={() => {
          console.log("Button clicked");
          if (onStart) onStart(); // Check if onStart is defined before calling
        }}
        className="absolute bottom-8 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg"
      >
        Start Presentation
      </button>
    </div>
  </div>
);

export default Introduction;
