import React from 'react';
import img from "../../assets/images/protocol-event.jpg";

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    date: 'Mar 16, 2020',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    backgroundImage: img
  },
  {
    id: 2,
    title: 'Boost your conversion rate',
    date: 'Mar 16, 2020',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    backgroundImage: img
  },
  {
    id: 3,
    title: 'Boost your conversion rate',
    date: 'Mar 16, 2020',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    backgroundImage: img
  },
  // More posts...
];

const Blogs = () => {
  return (
    <>
    <div className="bg-gray-900 py-24 sm:py-32 relative" id="blogs">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Blog Section Header */}
        <div className="text-center mt-2">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-blue to-black opacity-15" style={{ WebkitTextStroke: '2px black' }}>
    BLOG
</h1>

        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-5">
        <h2 className="text-center text-3xl font-semibold text-white mb-0 mt-[-20px]">
          Trusted by the world’s most innovative event organizers
        </h2>
        <p className="mt-4 text-center text-lg text-gray-300">
          Our platform is designed to provide seamless event management, making it easier for you to host engaging events.
        </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between overflow-hidden">
              
              <div
                className="group relative w-full h-96 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${post.backgroundImage})` }}
              >
                {/* Overlay for content readability */}
                <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-lg"></div>

                {/* Author and Date positioned at the bottom, above the Title */}
                <div className="absolute bottom-4 right-1 left-2 w-full flex justify-between items-center text-white"> {/* Changed left-6 to left-2 */}
                  {/* Date */}
                  <div className="text-sm text-gray-300">
                    <span>{post.date}</span>
                  </div>

                  {/* Author and Image */}
                  <div className="absolute right-10 flex items-center text-sm text-gray-300 space-x-1"> {/* Reduced space-x from 2 to 1 */}
                    <img alt="" src={post.author.imageUrl} className="w-6 h-6 rounded-full border-2 border-white flex-shrink-0" />
                    <span className="font-semibold">{post.author.name}</span>
                  </div>
                </div>

                {/* Title at the bottom */}
                <div className="absolute bottom-12 left-10 text-2xl font-semibold text-white"> {/* Changed left-6 to left-2 */}
                  {post.title}
                </div>
              </div>
            </article>
          ))}
        </div>  
      </div>
      </div>
    </>
  );
};

export default Blogs;