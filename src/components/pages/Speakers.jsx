import React from 'react'

const speakers = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Chief Technology Officer',
    imageSrc: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Lead Designer',
    imageSrc: 'https://via.placeholder.com/150',
  },
  // More speakers...
]

const Speakers = () => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32 relative" id="speakers">
      <div className="absolute top-8 left-0 right-0 flex justify-center items-center">
        <h1
          className="text-6xl sm:text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-blue to-black opacity-15"
          style={{ WebkitTextStroke: '2px black' }}
        >
          SPEAKERS
        </h1>
      </div>

      <div className="relative z-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold text-white mb-6">
          Meet Our Speakers
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="group relative bg-gray-800 p-6 rounded-lg shadow-md">
              <img
                src={speaker.imageSrc}
                alt={speaker.name}
                className="rounded-full w-24 h-24 mx-auto"
              />
              <h3 className="mt-4 text-lg font-medium text-white text-center">{speaker.name}</h3>
              <p className="text-sm text-gray-400 text-center">{speaker.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Speakers
