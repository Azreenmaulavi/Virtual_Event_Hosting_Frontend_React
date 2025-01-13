import React from 'react'

const Testimonials = () => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32 relative" id="testimonials">
      {/* Title Effect */}
      <div className="absolute top-8 left-0 right-0 flex justify-center items-center">
        <h1
          className="text-6xl sm:text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-blue to-black opacity-15"
          style={{ WebkitTextStroke: '2px black' }}
        >
          TESTIMONIALS
        </h1>
      </div>
      
      <div className="mx-auto max-w-2xl lg:max-w-4xl px-6 lg:px-8 relative z-5">
        <img
          alt=""
          src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg"
          className="mx-auto h-12"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-white text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-white">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default Testimonials;
