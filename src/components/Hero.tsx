
import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-[url('/its-me.jpg')] bg-cover flex flex-col"
      style={{
        backgroundSize: 'contain', // Adjust image size
        backgroundPosition: 'center', // Center the background image
      }}
    >
      <Navbar />
      <div className="container mx-auto flex flex-col justify-center items-center text-center lg:grid lg:grid-cols-2 lg:items-center lg:text-left h-full px-4">
        {/* Empty space for spacing in larger screens */}
        <div className="hidden lg:block"></div>

        {/* Text Content */}
        <div className="text-[40px] sm:text-[60px] lg:text-[80px] font-bold leading-tight">
          <div>
            <p data-aos="zoom-out-left">I&apos;m</p>
            <p data-aos="zoom-out-left">Faria</p>
            <p data-aos="zoom-out-left">Usman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
