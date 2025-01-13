// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2023 Virtual Events. All rights reserved.</p>
        <p>Contact us at <a href="mailto:info@virtualevents.com" className="text-blue-400">info@virtualevents.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;