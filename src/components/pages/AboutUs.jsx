import React from 'react';
import { FaRocket, FaEye, FaHandshake } from 'react-icons/fa'; // Importing icons from react-icons


const AboutUs = () => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* About Us Section Header */}
        <div className="text-center mb-16">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-blue to-black opacity-15" style={{ WebkitTextStroke: '2px black' }}>
    ABOUT US
</h1>

        <h2 className="text-center text-2xl text-left font-semibold text-white mt-[-20px]">
        we specialize in delivering top-tier virtual event hosting services that help individuals, businesses, and organizations connect with their audience in a seamless and impactful way. 
        </h2>
        </div>

        {/* Mission, Vision, and Values Section */}
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          
          {/* Mission */}
          <div className="text-center max-w-xs">
            <div className="mb-4 text-5xl text-white">
              <FaRocket />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-300">
              To provide innovative and seamless virtual event hosting services, allowing individuals and businesses to connect, collaborate, and create unforgettable experiences in the digital world.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center max-w-xs">
            <div className="mb-4 text-5xl text-white">
              <FaEye />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            <p className="mt-4 text-lg text-gray-300">
              To become the leading platform for virtual events, empowering people around the world to share knowledge, foster collaboration, and build meaningful relationships through our cutting-edge technology.
            </p>
          </div>

          {/* Values */}
          <div className="text-center max-w-xs">
            <div className="mb-4 text-5xl text-white">
              <FaHandshake />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Values</h2>
            <p className="mt-4 text-lg text-gray-300">
              Integrity, Innovation, Collaboration, and Customer-Centricity are at the heart of everything we do. We aim to create impactful and long-lasting relationships with every event.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutUs;
