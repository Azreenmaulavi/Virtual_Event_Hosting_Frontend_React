import React from 'react'

const ContactUs = () => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32 relative" id="contact">
      {/* Title Effect */}
      <div className="absolute top-8 left-0 right-0 flex justify-center items-center">
        <h1
          className="text-6xl sm:text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-blue to-black opacity-15"
          style={{ WebkitTextStroke: '2px black' }}
        >
          CONTACT US
        </h1>
      </div>

      <div className="relative z-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold text-white mb-6">
          Get in Touch with Us
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-white">Our Office</h3>
            <p className="mt-2 text-sm text-gray-300">
              1234 Street Name, City, State, 12345
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Email: info@example.com
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Phone: +1 (234) 567-890
            </p>
          </div>

          <form className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-sm font-medium text-white" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-1 block w-full h-12 py-3 rounded-md border-gray-300 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-white" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 h-12 py-3 block w-full rounded-md border-gray-300 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-white" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
