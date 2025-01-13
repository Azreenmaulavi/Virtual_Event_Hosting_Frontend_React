import React from 'react';
import Button from "../common/Button";
import { motion } from 'framer-motion'; // For animation

const stats = [
    { name: 'Events Hosted', value: '500+' },
    { name: 'Global Participants', value: '50,000+' },
    { name: 'Hours of Live Streaming', value: '10,000+' },
    { name: 'Support Available', value: '24/7' },
];

const Hero = () => {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 overflow-x-hidden">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                className="absolute inset-0 -z-10 w-full h-full object-cover object-right md:object-center"
            />
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 max-w-full">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 max-w-full flex flex-col lg:flex-row items-center">
                    <div className="max-w-2xl lg:max-w-xl lg:w-1/2">
                        <h2 className="text-5xl font-semibold tracking-tight mt-[-60px] text-white sm:text-7xl italic font-serif">GlobalGather</h2>
                        <h4 className="text-5xl tracking-tight text-white sm:text-5xl">Work with us</h4>
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
                            Our platform empowers you to create engaging and interactive experiences that connect audiences from around the globe. Whether you're organizing webinars, conferences, or hybrid events, our comprehensive solutions ensure that your virtual gatherings are not only successful but also memorable.
                        </p>
                    </div>

                    <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-10 ml-10">
                        <input
                            type="text"
                            placeholder="Search events..."
                            className="w-full p-4 text-lg rounded-md text-gray-700"
                        />
                    </div>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <dl className="mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:mt-20">
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.name}
                                className="flex flex-col-reverse gap-1"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
                <div className="mt-16 text-center">
                    <h3 className="text-3xl font-semibold text-white">Join Us Today</h3>
                    <p className="mt-4 text-lg text-gray-300">Explore our platform and get started with your events.</p>
                    <div className="mt-6 flex flex-wrap justify-center gap-6">
                        <Button text="Host an Event" link="/login" color="text-white bg-blue-900" hoverColor="bg-blue-900" />
                        <Button text="Join an Event" link="/login" color="text-white bg-gray-700" hoverColor="bg-black" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
