import React from 'react'
import img from "../../assets/images/virtual_events.jpg"
import img1 from "../../assets/images/conference.jpg"
import img2 from "../../assets/images/workshop.jpg"
import img3 from "../../assets/images/hybrid.jpg"
const eventCategories = [
  {
    id: 1,
    name: 'Virtual Events',
    href: '#',
    imageSrc: img,
    imageAlt: "Image for virtual events category.",
    description: 'Engage a global audience with our virtual event hosting tools.',
  },
  {
    id: 2,
    name: 'Hybrid Events',
    href: '#',
    imageSrc: img3,
    imageAlt: "Image for hybrid events category.",
    description: 'Combine the best of in-person and virtual experiences.',
  },
  {
    id: 3,
    name: 'Conferences',
    href: '#',
    imageSrc: img1,
    imageAlt: "Image for conferences category.",
    description: 'Create professional and engaging conference experiences.',
  },
  {
    id: 4,
    name: 'Workshops',
    href: '#',
    imageSrc: img2,
    imageAlt: "Image for workshops category.",
    description: 'Interactive and hands-on learning for your audience.',
  },
  // More event categories...
]

const Categories = () => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32 relative" id="categories">
      {/* Title Effect */}
      <div className="absolute top-8 left-0 right-0 flex justify-center items-center">
        <h1
          className="text-6xl sm:text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-blue to-black opacity-15"
          style={{ WebkitTextStroke: '2px black' }}
        >
          EVENT CATEGORIES
        </h1>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-5">
        <h2 className="text-center text-3xl font-semibold text-white mb-0">
          Explore Different Event Categories
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {eventCategories.map((category) => (
            <div key={category.id} className="group relative">
              <img
                alt={category.imageAlt}
                src={category.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    <a href={category.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {category.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
