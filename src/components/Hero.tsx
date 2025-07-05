import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="bg-black text-white pt-24 pb-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-6">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-5" data-aos="fade-up">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="block">I&apos;m</span>
            <span className="block text-red-300">Faria Usman</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            I&apos;m a Frontend Developer who enjoys creating clean and user-friendly websites. I&apos;m always learning new things and love turning ideas into real, working products.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-4 pt-2">
            <a
              href="#contact"
              className="bg-red-300 hover:bg-red-400 text-white font-medium py-2 px-6 rounded transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="/resume.png"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-red-300 hover:bg-red-300 text-white hover:text-black font-medium py-2 px-6 rounded transition-all duration-300"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-left">
          <Image
            src="/its-me.jpg"
            alt="Faria Usman"
            width={150}
            height={150}
            className="w-[150px] sm:w-[250px] lg:w-[280px] rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
