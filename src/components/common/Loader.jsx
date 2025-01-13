// src/components/AttractiveLoader.jsx

import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="relative w-24 h-24 border-8 border-t-transparent border-l-transparent border-blue-600 rounded-full animate-spin-slow">
        <div className="absolute top-0 left-0 w-full h-full border-8 border-t-transparent border-r-transparent border-gradient-to-tl from-pink-500 via-purple-500 to-indigo-500 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default Loader;
