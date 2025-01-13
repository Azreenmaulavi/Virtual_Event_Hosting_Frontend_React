import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32 relative" id="features">
      <div className="absolute top-8 left-0 right-0 flex justify-center items-center mt-5">
      <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-blue to-black opacity-15" style={{ WebkitTextStroke: '2px black' }}>
    FEATURES
</h1>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 relative z-5 mt-5">
        <h2 className="text-center text-3xl font-semibold text-white mb-0">
          Trusted by the world’s most innovative event organizers
        </h2>
        <p className="mt-4 text-center text-lg text-gray-300">
          Our platform is designed to provide seamless event management, making it easier for you to host engaging events.
        </p>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          
          {/* Feature 1: Easy Event Registration */}
          <div className="flex flex-col items-center text-center">
          <img width="96" height="96" src="https://img.icons8.com/sf-regular/96/edit-user-male.png" alt="edit-user-male" className="h-24 w-24 object-contain mb-4" style={{filter:"brightness(0) invert(1)"}}/><h3 className="text-xl font-medium text-white">Easy Event Registration</h3>
            <p className="mt-2 text-gray-300">
              Simplified event registration for attendees with easy access and sign-up forms.
            </p>
          </div>

          {/* Feature 2: Real-time Event Analytics */}
          <div className="flex flex-col items-center text-center">
            <img src="https://img.icons8.com/ios-glyphs/60/analytics.png" alt="analytics" className="h-24 w-24 object-contain mb-4" style={{filter:"brightness(0) invert(1)"}}/>
            <h3 className="text-xl font-medium text-white">Real-time Event Analytics</h3>
            <p className="mt-2 text-gray-300">
              Track attendee engagement, session participation, and more during your event.
            </p>
          </div>

          {/* Feature 3: Virtual and Hybrid Event Hosting */}
          <div className="flex flex-col items-center text-center">
            <img
              alt="Virtual Hosting"
              src="https://img.icons8.com/ios/452/video-conference.png"
              className="h-24 w-24 object-contain mb-4" style={{filter:"brightness(0) invert(1)"}}
            />
            <h3 className="text-xl font-medium text-white">Virtual & Hybrid Hosting</h3>
            <p className="mt-2 text-gray-300">
              Host virtual and hybrid events with ease, providing an interactive experience for global audiences.
            </p>
          </div>

          {/* Feature 4: Customizable Event Pages */}
          <div className="flex flex-col items-center text-center">
            <img
              alt="Event Pages"
              src="https://img.icons8.com/ios/452/design.png"
              className="h-24 w-24 object-contain mb-4" style={{filter:"brightness(0) invert(1)"}}
            />
            <h3 className="text-xl font-medium text-white">Customizable Event Pages</h3>
            <p className="mt-2 text-gray-300">
              Design unique event pages tailored to your brand with easy-to-use customization tools.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
