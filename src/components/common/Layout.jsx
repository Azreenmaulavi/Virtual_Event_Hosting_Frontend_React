// src/components/Layout.jsx

import React from 'react';
import Footer from './Footer'; // Assuming Footer is in the same folder
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
     <Navbar/>

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
