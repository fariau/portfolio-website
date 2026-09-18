import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center w-full bg-zinc-950 
      pt-28 md:pt-32 pb-20 md:pb-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6" data-aos="fade-up">

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none">
                <span className="block text-zinc-100">Hi, I&apos;m</span>
                <span className="block bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 bg-clip-text text-transparent mt-1">
                  Faria Usman
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-brand-400 font-medium tracking-wide">
                AI Engineer & Agentic AI Developer
              </p>
            </div>

            <p className="text-base sm:text-lg text-zinc-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I build <span className="text-brand-300">AI Agents</span> and{" "}
              <span className="text-brand-300">Agentic AI</span> systems on the OpenAI API, and design
              AI automation workflows backed by strong prompt engineering. Alongside that, I develop
              modern web applications with <span className="text-brand-300">Next.js</span>, React,
              TypeScript, and Tailwind CSS — plus Python and Streamlit for AI-based tools, and{" "}
              <span className="text-brand-300">Claude Code</span> for AI-assisted development. <br />
              Currently enrolled in the Governor Initiative for Artificial Intelligence and Computing (GIAIC), specializing in AI, Web 3.0 & Metaverse.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">

              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-2xl 
      bg-gradient-to-r from-brand-500 to-brand-700 
      hover:from-brand-500 hover:to-brand-600 
      text-white transition-all duration-300 
      shadow-lg shadow-brand-500/40
      w-full sm:w-auto min-w-[180px]"
              >
                Get In Touch
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>

              <a
                href="https://my-resume-henna-delta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-2xl 
      border-2 border-brand-400 text-brand-200 hover:text-white 
      hover:bg-brand-950/50 
      transition-all duration-300
      w-full sm:w-auto min-w-[180px]"
              >
                See My Resume
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="150">

            <div className="relative">

              {/* glow */}
              <div
                className="absolute -inset-8 rounded-full blur-3xl opacity-30"
                style={{
                  background:
                    'radial-gradient(circle at 50% 40%, rgba(33, 158, 130, 0.35) 0%, rgba(15, 74, 65, 0.2) 50%, transparent 80%)',
                }}
              />

              {/* image */}
              <div className="relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[360px] aspect-square overflow-hidden rounded-3xl shadow-2xl border border-zinc-800/80">
                <Image
                  src="/its-me.jpg"
                  alt="Faria Usman - AI Engineer & Agentic AI Developer"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 260px, 360px"
                />
              </div>

              <div className="absolute -inset-1 border border-brand-500/30 rounded-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;