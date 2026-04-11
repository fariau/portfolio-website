import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center w-full bg-[#2d1b3f] 
                 pt-28 md:pt-32 pb-20 md:pb-24 
                 overflow-hidden -mx-px min-w-full"
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">

          {/* Left - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-5" data-aos="fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="block text-gray-50">Hi, I&apos;m</span>
              <span className="block text-[#f4a261] mt-1 md:mt-2">Faria Usman</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Frontend Developer crafting clean, responsive, and user-focused web experiences. 
              Passionate about modern technologies and turning ideas into functional products.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(244,162,97,0.35)] text-white"
                style={{ backgroundColor: '#f4a261' }}
              >
                Contact Me
              </a>

              <a
                href="/resume.png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 text-sm border-2 font-medium rounded-lg transition-all duration-300 hover:text-white"
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
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="relative">
              <div 
                className="absolute -inset-6 rounded-full blur-3xl opacity-35"
                style={{ 
                  background: 'radial-gradient(circle at 50% 50%, rgba(244,162,97,0.35) 0%, rgba(244,162,97,0.20) 50%, transparent 80%)'
                }}
              />

              <div className="relative w-[200px] sm:w-[250px] md:w-[290px] lg:w-[340px] aspect-square overflow-hidden rounded-2xl shadow-2xl border border-gray-700/50">
                <Image
                  src="/its-me.jpg"
                  alt="Faria Usman"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 250px, 340px"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;