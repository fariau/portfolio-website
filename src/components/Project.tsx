"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AllProjectsModal from "./AllProjectsModal";

interface ProjectType {
  id: number;
  title: string;
  img: string;
  link?: string;
  category: "nextjs" | "html-css" | "python" | "typescript";
}

const projects: ProjectType[] = [
  { id: 0, title: "Countdown Timer", img: "/project-0.png", link: "https://count-down-timer-bice.vercel.app/", category: "nextjs" },
  { id: 1, title: "Currency Converter Project", img: "/project-1.jpg", link: "https://github.com/fariau/currency-converter", category: "typescript" },
  { id: 2, title: "Static Interactive Resume", img: "/project-2.png", link: "https://my-resume-henna-delta.vercel.app/", category: "html-css" },
  { id: 3, title: "Simple Calculator Project", img: "/project-3.jpg", link: "https://github.com/fariau/simple-calculator", category: "typescript" },
  { id: 4, title: "Food Blog Website", img: "/project-4.png", link: "https://blog-website-delta-two.vercel.app/", category: "nextjs" },
  { id: 5, title: "Simple Website Project", img: "/project-5.png", link: "https://html-css-website-seven.vercel.app/", category: "html-css" },
  { id: 6, title: "BMI Calculator", img: "/project-6.png", link: "https://bmi-calculator-6hganmj35gjthj4787sqse.streamlit.app/", category: "python" },
  { id: 7, title: "CountDown Timer", img: "/project-7.png", link: "https://countdowntimer-python-avdygsnuap95kyfcvyn2ta.streamlit.app/", category: "python" },
  { id: 8, title: "Growth Mindset", img: "/project-8.png", link: "https://growth-mindset-gprhvhnyyh4ctc59nm2xkg.streamlit.app/", category: "python" },
  { id: 9, title: "Password Generator", img: "/project-9.png", link: "https://passwordgenerator-fgvrldshd4gxbuypqvmpie.streamlit.app/", category: "python" },
  { id: 10, title: "Nike Website Project", img: "/project-10.png", link: "https://hackathon03-template03.vercel.app/", category: "nextjs" },
  { id: 11, title: "Multi-Page Website", img: "/project-11.png", link: "https://multi-page-website-wheat.vercel.app/", category: "html-css" },
  { id: 12, title: "Guess the Number", img: "/project-12.png", link: "https://7qscylqeipqb8bjo2hca42.streamlit.app/", category: "python" },
  { id: 13, title: "Unit Converter", img: "/project-13.png", link: "https://unit-convertor-pdeckfbybf3gvtchqma9bz.streamlit.app/", category: "python" },
  { id: 14, title: "Secure Data Encryption System", img: "/project-14.png", link: "https://project05securedataencryption-45plyfepvd2y6f5hy6jarv.streamlit.app/", category: "python" },
  { id: 15, title: "Password Strength Checker", img: "/project-15.png", link: "https://password-strength-meter-ep3dxwilkwqnvkvly8naix.streamlit.app/", category: "python" },
  { id: 16, title: "Shareable Resume Builder", img: "/project-16.png", link: "https://hackathon-milestone-05-ashy.vercel.app/", category: "html-css" },
  { id: 17, title: "Editable Resume Builder", img: "/project-17.png", link: "https://hackathon-milestone-04-five.vercel.app/", category: "html-css" },
  { id: 18, title: "Audio Player App", img: "/project-18.png", link: "https://audio-player-app-two.vercel.app/", category: "nextjs" },
  { id: 19, title: "Random User Generator", img: "/project-19.png", link: "https://random-user-generator-app-gamma.vercel.app/", category: "nextjs" },
  { id: 20, title: "Todo List", img: "/project-20.png", link: "https://todo-list-app-with-next-js.vercel.app/", category: "nextjs" },
  { id: 21, title: "URL Shortenert", img: "/project-21.png", link: "https://url-shortener-app-beryl.vercel.app/", category: "nextjs" },
  { id: 22, title: "Snake Game", img: "/project-22.png", link: "https://snake-game-drab-two.vercel.app/", category: "nextjs" },
  { id: 23, title: "Stop Watch", img: "/project-23.png", link: "https://stop-watch-app-kappa.vercel.app/", category: "nextjs" },
  { id: 24, title: "Quiz-App", img: "/project-24.png", link: "https://quiz-app-nextjs-six.vercel.app/", category: "nextjs" },
  { id: 25, title: "Image Slider", img: "/project-25.png", link: "https://image-slider-app-three.vercel.app/", category: "nextjs" },
  { id: 26, title: "Word-Counter", img: "/project-26.png", link: "https://word-counter-app-kappa-black.vercel.app/", category: "nextjs" },
  { id: 27, title: "Recipe Search", img: "/project-27.png", link: "https://recipe-search-app-bice.vercel.app/", category: "nextjs" },
  { id: 28, title: "Notes-App", img: "/project-28.png", link: "https://notes-app-inky-mu-39.vercel.app/", category: "nextjs" },
  { id: 29, title: "GitHub Profile Viewer", img: "/project-29.png", link: "https://github-profile-viewer-amber-chi.vercel.app/", category: "nextjs" },
  { id: 30, title: "Currency Converter", img: "/project-30.png", link: "https://currency-converter-app-sand.vercel.app/", category: "nextjs" },
  { id: 31, title: "Meme Generator", img: "/project-31.png", link: "https://meme-generator-cyan-one.vercel.app/", category: "nextjs" },
  { id: 32, title: "Movie Search App", img: "/project-32.png", link: "https://movie-search-app-murex-six.vercel.app/", category: "nextjs" },

];

const StackedSection = ({ 
  title, 
  categoryProjects 
}: { 
  title: string; 
  categoryProjects: ProjectType[]; 
}) => {
  const [stack, setStack] = useState<ProjectType[]>(categoryProjects);
  const [positions, setPositions] = useState<{ x: number; y: number; rotate: number }[]>(
    categoryProjects.map(() => ({ x: 0, y: 0, rotate: 0 }))
  );

  useEffect(() => {
    if (categoryProjects.length === 0) return;

    const interval = setInterval(() => {
      setStack((prev) => {
        if (prev.length === 0) return prev;
        const [first, ...rest] = prev;
        return [...rest, first];
      });

      setPositions(
        categoryProjects.map(() => ({
          x: Math.random() * 60 - 30,
          y: Math.random() * 50 - 25,
          rotate: Math.random() * 12 - 6,
        }))
      );
    }, 3800);

    return () => clearInterval(interval);
  }, [categoryProjects]);

  return (
    <div className="mb-9 w-full">   {/* Tight margin */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center text-[#f8f1f1] tracking-tight mb-5"
      >
        {title}
      </motion.h2>

      <div className="relative w-full max-w-4xl lg:max-w-5xl aspect-[4/3] sm:aspect-[16/10] md:aspect-video mx-auto flex items-center justify-center mb-6">
        {stack.map((project, index) => (
          <motion.div
            key={project.id}
            className="absolute w-[58%] sm:w-[54%] md:w-[50%] lg:w-[46%] aspect-[4/3] sm:aspect-[16/10] md:aspect-video rounded-2xl overflow-hidden border border-[#c7b3e6]/20 shadow-xl bg-[#2d1b3f] backdrop-blur-md"
            style={{ zIndex: stack.length - index }}
            animate={{
              x: positions[index]?.x ?? 0,
              y: positions[index]?.y ?? 0,
              rotate: positions[index]?.rotate ?? 0,
            }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              x: 0,
              y: -18,
              boxShadow: "0 0 35px rgba(244, 162, 97, 0.25)",
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 58vw, (max-width: 1200px) 50vw, 46vw"
                priority={index < 2}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none" />

              <div className="absolute inset-0 p-4 flex flex-col justify-end text-[#e0d9d9]">
                <h3 className="text-base sm:text-lg font-semibold mb-2 tracking-tight">
                  {project.title}
                </h3>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f4a261] hover:text-[#ff9f80] font-medium text-sm transition-colors inline-flex items-center gap-2"
                  >
                    View Project <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextjsProjects     = projects.filter(p => p.category === "nextjs");
  const typescriptProjects = projects.filter(p => p.category === "typescript");
  const htmlCssProjects    = projects.filter(p => p.category === "html-css");
  const pythonProjects     = projects.filter(p => p.category === "python");

  return (
    <section
      id="project"
      className="relative overflow-hidden bg-[#2d1b3f] py-12 md:py-16 lg:py-20 px-5 md:px-8 lg:px-12"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 w-[600px] h-[600px] bg-[#f4a261]/22 rounded-full blur-[140px]" />
        <div className="absolute right-1/4 bottom-1/4 w-[550px] h-[550px] bg-[#f4a261]/18 rounded-full blur-[130px]" />
      </div>

      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center mb-10 relative z-10"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f8f1f1] tracking-tight">
          My <span style={{ color: '#f4a261' }}>Projects</span>
        </h1>
      </motion.div>

      {/* All Category Sections */}
      <StackedSection title="Next.js Web Projects" categoryProjects={nextjsProjects} />
      <StackedSection title="TypeScript Projects" categoryProjects={typescriptProjects} />
      <StackedSection title="HTML & CSS Static Websites" categoryProjects={htmlCssProjects} />
      <StackedSection title="Python & Streamlit Applications" categoryProjects={pythonProjects} />

      {/* Single View All Button at the very bottom with minimal gap */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-10 py-4 border-2 border-[#f4a261] text-[#f4a261] hover:bg-[#f4a261] hover:text-white 
                     rounded-2xl font-medium text-lg transition-all duration-300 
                     flex items-center gap-3 hover:shadow-[0_0_25px_rgba(244,162,97,0.4)]"
        >
          View All Projects
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>

      {/* All Projects Modal */}
      <AllProjectsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        allProjects={projects} 
      />
    </section>
  );
}