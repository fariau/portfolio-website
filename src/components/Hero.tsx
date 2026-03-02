import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section 
      id="home" 
      className=" flex items-center w-full bg-[#2d1b3f] pt-28 md:pt-32 pb-20 md:pb-24"
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left - Text Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6 md:space-y-8" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="block text-gray-50">Hi, I'm</span>
              <span className="block text-[#f4a261] mt-1 md:mt-2">Faria Usman</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Frontend Developer crafting clean, responsive, and user-focused web experiences.
              Passionate about modern technologies and turning ideas into functional products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4 md:pt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(244,162,97,0.35)] focus:outline-none focus:ring-2 focus:ring-[#f4a261]/40 text-white"
                style={{ 
                  backgroundColor: '#f4a261',
                }}
              >
                Contact Me
              </a>

              <a
                href="/resume.png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 font-medium rounded-lg transition-all duration-300 hover:text-white"
                style={{ 
                  borderColor: '#f4a261',
                  color: '#e8c39e', 
                }}
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="relative">
              <div 
                className="absolute -inset-5 rounded-full blur-2xl opacity-35"
                style={{ 
                  background: 'radial-gradient(circle, rgba(244,162,97,0.25) 0%, rgba(199,179,230,0.15) 50%, transparent 70%)'
                }}
              />
              <Image
                src="/its-me.jpg"
                alt="Faria Usman"
                width={320}
                height={320}
                className="relative w-[240px] sm:w-[300px] md:w-[340px] lg:w-[380px] rounded-2xl shadow-2xl object-cover border border-gray-700/50"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;