import React from 'react';

const Features = () => {
  return (
    <>
      <div className="bg-gray-900 py-24 sm:py-32 relative" id="speakers">
        <h1 className="text-8xl font-bold text-gray-800 opacity-200">FEATURES</h1>
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">Our Unique & Awesome Core Features</h2>
        <p className="text-lg mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros.
          Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 p-6 rounded-full mb-4">
              <i className="fas fa-chart-bar text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold">Crafted for Startups</h3>
            <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 p-6 rounded-full mb-4">
              <i className="fas fa-layer-group text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold">High-quality Design</h3>
            <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 p-6 rounded-full mb-4">
              <i className="fas fa-clipboard-list text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold">All Essential Sections</h3>
            <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.
            </p>
          </div>
        </div>
      </div>
      </>
  );
};

export default Features;
