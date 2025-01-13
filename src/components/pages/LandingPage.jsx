// src/components/LandingPage.jsx

import React from 'react';


import FeaturesSection from './FeaturesSection';
import AboutUs from './AboutUs';
import Blogs from './Blogs';
import Testimonials from './Testimonials';
import Hero from './Hero'; 
import Categories from './Categories';
import ContactUs from './ContactUs';
import Speakers from './Speakers';
import FAQ from './FAQ';




const LandingPage = () => {
  return (
<>
      <Hero/>
      <FeaturesSection />
      <AboutUs/>
      <Categories/>
      <Blogs/>
      <Testimonials/>
      <Speakers/>
      <ContactUs/>
      <FAQ/>

   
      </>
  );
};

export default LandingPage;