import React, { useState } from 'react';
import img from '../../assets/images/Logo.png'; // Import your custom Button component

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-gray-900">
            <nav className="fixed top-0 left-0 w-full bg-gray-900 z-50 shadow-md h-20">
                <div className="mx-auto px-6 py-4 max-w-7xl flex items-center justify-between mt-[-25px]">
                   {/* Logo (SVG as Image) */}
                   <div className="text-white text-xl font-semibold">
                        <img
                            src={img}
                            alt="Logo"
                            className="w-40 h-auto object-contain"  // Adjust width and height
                        />
                    </div>

                    {/* Hamburger Button for mobile */}
                    <button
                        onClick={toggleMenu}
                        className="sm:hidden text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* Navbar Links (Desktop view) */}
                    <div className="space-x-6 hidden sm:flex">
                        <a href="/" className="text-white hover:text-gray-400">Home</a>
                        <a href="#features" className="text-white hover:text-gray-400">Features</a>
                        <a href="#about" className="text-white hover:text-gray-400">About</a>
                        <a href="#categories" className="text-white hover:text-gray-400">Categories</a>
                        <a href="#blogs" className="text-white hover:text-gray-400">Blogs</a>
                        <a href="#testimonials" className="text-white hover:text-gray-400">Testimonials</a>
                        <a href="#speakers" className="text-white hover:text-gray-400">Speakers</a>
                        <a href="#contact" className="text-white hover:text-gray-400">Contact Us</a>
                        <a href="#faq" className="text-white hover:text-gray-400">FAQ</a>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`${isMenuOpen ? "block" : "hidden"
                            } sm:hidden absolute top-20 left-0 w-full bg-gray-900 text-center space-y-6 py-6`}
                    >
                        <a href="/" className="text-white hover:text-gray-400 block">Home</a>
                        <a href="#about" className="text-white hover:text-gray-400 block">About</a>
                        <a href="#schedule" className="text-white hover:text-gray-400 block">Schedule</a>
                        <a href="#speakers" className="text-white hover:text-gray-400 block">Speakers</a>
                        <a href="#contact" className="text-white hover:text-gray-400 block">Contact Us</a>
                        <a href="#faq" className="text-white hover:text-gray-400 block">FAQ</a>



                    </div>

                  
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
