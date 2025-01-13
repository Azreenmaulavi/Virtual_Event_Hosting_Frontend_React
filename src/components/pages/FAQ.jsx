import React from 'react';

const faqs = [
  {
    question: 'What is the event about?',
    answer: 'This event is about discussing the future of technology and design.',
  },
  {
    question: 'How can I register?',
    answer: 'You can register by clicking on the register button at the top of the page.',
  },
  // More FAQs...
];

const FAQ = () => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32 relative" id="faq">
      <div className="absolute top-8 left-0 right-0 flex justify-center items-center">
        <h1
          className="text-6xl sm:text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-blue to-black opacity-15"
          style={{ WebkitTextStroke: '2px black' }}
        >
          FAQ
        </h1>
      </div>

      <section className="container mx-auto p-4 md:p-8 relative z-10">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase text-white">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-white">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y divide-gray-700 sm:px-8 lg:px-12 xl:px-32">
          {faqs.map((faq, index) => (
            <details key={index} className="group">
              <summary className="py-2 text-white outline-none cursor-pointer focus:underline group-open:underline">
                {faq.question}
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
