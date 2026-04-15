import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center w-full bg-zinc-950 
                 pt-28 md:pt-32 pb-20 md:pb-24 
                 overflow-hidden"
    >
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6" data-aos="fade-up">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none">
                <span className="block text-zinc-100">Hi, I&apos;m</span>
                <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent mt-1">
                  Faria Usman
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-violet-400 font-medium tracking-wide">
                Frontend Developer
              </p>
            </div>

            <p className="text-base sm:text-lg text-zinc-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Crafting clean, responsive, and user-centric web experiences with
              <span className="text-violet-300"> React.js</span>,
              <span className="text-violet-300"> TypeScript</span>, and
              <span className="text-violet-300"> Tailwind CSS</span>.
              Passionate about modern technologies and turning ideas into impactful digital products.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
              {/* Primary Button - Get In Touch */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-2xl 
               bg-gradient-to-r from-violet-600 to-fuchsia-600 
               hover:from-violet-500 hover:to-fuchsia-500 
               active:from-violet-700 active:to-fuchsia-700
               text-white transition-all duration-300 
               shadow-lg shadow-violet-500/40 hover:shadow-xl hover:shadow-violet-500/50 
               border border-violet-400/20 hover:border-violet-400/40
               w-full sm:w-auto min-w-[180px]"
              >
                Get In Touch
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>

              {/* Secondary Button - Download Resume */}
              <a
                href="https://my-resume-henna-delta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-2xl 
               border-2 border-violet-400 text-violet-300 hover:text-white 
               hover:border-violet-300 hover:bg-violet-950/50 
               transition-all duration-300
               w-full sm:w-auto min-w-[180px]"
              >
               See My Resume
              </a>
            </div>
          </div>

          {/* Right - Image with glow */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="150">
            <div className="relative">
              {/* Glow effect */}
              <div
                className="absolute -inset-8 rounded-full blur-3xl opacity-30"
                style={{
                  background: 'radial-gradient(circle at 50% 40%, rgba(139, 92, 246, 0.45) 0%, rgba(236, 72, 153, 0.25) 50%, transparent 80%)',
                }}
              />

              <div className="relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[360px] aspect-square overflow-hidden rounded-3xl shadow-2xl border border-zinc-800/80">
                <Image
                  src="/its-me.jpg"
                  alt="Faria Usman - Frontend Developer"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 260px, 360px"
                />
              </div>

              {/* Optional subtle ring */}
              <div className="absolute -inset-1 border border-violet-500/30 rounded-3xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;