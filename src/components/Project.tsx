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
  category: "nextjs" | "html-css" | "python" | "typescript" | "cli";
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
  { id: 21, title: "URL Shortener", img: "/project-21.png", link: "https://url-shortener-app-beryl.vercel.app/", category: "nextjs" },
  { id: 22, title: "Snake Game", img: "/project-22.png", link: "https://snake-game-drab-two.vercel.app/", category: "nextjs" },
  { id: 23, title: "Stop Watch", img: "/project-23.png", link: "https://stop-watch-app-kappa.vercel.app/", category: "nextjs" },
  { id: 24, title: "Quiz App", img: "/project-24.png", link: "https://quiz-app-nextjs-six.vercel.app/", category: "nextjs" },
  { id: 25, title: "Image Slider", img: "/project-25.png", link: "https://image-slider-app-three.vercel.app/", category: "nextjs" },
  { id: 26, title: "Word Counter", img: "/project-26.png", link: "https://word-counter-app-kappa-black.vercel.app/", category: "nextjs" },
  { id: 27, title: "Recipe Search", img: "/project-27.png", link: "https://recipe-search-app-bice.vercel.app/", category: "nextjs" },
  { id: 28, title: "Notes App", img: "/project-28.png", link: "https://notes-app-inky-mu-39.vercel.app/", category: "nextjs" },
  { id: 29, title: "GitHub Profile Viewer", img: "/project-29.png", link: "https://github-profile-viewer-amber-chi.vercel.app/", category: "nextjs" },
  { id: 30, title: "Currency Converter", img: "/project-30.png", link: "https://currency-converter-app-sand.vercel.app/", category: "nextjs" },
  { id: 31, title: "Meme Generator", img: "/project-31.png", link: "https://meme-generator-cyan-one.vercel.app/", category: "nextjs" },
  { id: 32, title: "Movie Search App", img: "/project-32.png", link: "https://movie-search-app-murex-six.vercel.app/", category: "nextjs" },
  { id: 33, title: "Expense Tracker", img: "/project-33.png", link: "https://expense-tracker-zeta-rose-36.vercel.app/", category: "nextjs" },
  { id: 34, title: "Pomodoro Timer", img: "/project-34.png", link: "https://pomodoro-timer-nine-ivory.vercel.app/", category: "nextjs" },
  { id: 35, title: "HTML Previewer", img: "/project-35.png", link: "https://html-previewer-three.vercel.app/", category: "nextjs" },
  { id: 36, title: "Unit Converter", img: "/project-36.png", link: "https://unit-converter-tan-chi.vercel.app/", category: "nextjs" },
  { id: 37, title: "BMI Calculator", img: "/project-37.png", link: "https://bmi-calculator-app-xi.vercel.app/", category: "nextjs" },
  { id: 38, title: "Password Generator", img: "/project-38.png", link: "https://password-generator-opal-one.vercel.app/", category: "nextjs" },
  { id: 39, title: "Tip Calculator", img: "/project-39.png", link: "https://tip-calculator-app-pied-mu.vercel.app/", category: "nextjs" },
  { id: 40, title: "Color Picker", img: "/project-40.png", link: "https://color-picker-eight-self.vercel.app/", category: "nextjs" },
  { id: 41, title: "Random Joke", img: "/project-41.png", link: "https://random-joke-generator-pi-six.vercel.app/", category: "nextjs" },
  { id: 42, title: "Digital Clock", img: "/project-42.png", link: "https://digital-clock-sandy-phi.vercel.app/", category: "nextjs" },
  { id: 43, title: "Simple Calculator", img: "/project-43.png", link: "https://simple-calculator-app-orcin.vercel.app/", category: "nextjs" },
  { id: 44, title: "Birthday Wish", img: "/project-44.png", link: "https://birthday-wish-app-sage.vercel.app/", category: "nextjs" },
  { id: 45, title: "Number Guessing", img: "/project-45.png", link: "https://number-guess-game-rust.vercel.app/", category: "nextjs" },
  { id: 46, title: "Weather Widget", img: "/project-46.png", link: "https://weather-widget-lake.vercel.app/", category: "nextjs" },
  { id: 47, title: "Todo App CLI", img: "/project-47.png", link: "https://todo-app-hackathon-alpha.vercel.app/auth/login", category: "cli" },
  { id: 48, title: "Birthday Card CLI", img: "/project-48.png", link: "https://birthday-card-livid-phi.vercel.app/", category: "cli" },
  { id: 49, title: "Modern Calendar CLI", img: "/project-49.png", link: "https://modern-calendar-blond.vercel.app/", category: "cli" },
  { id: 50, title: "CLI Calculator", img: "/project-50.png", link: "https://gemini-cli-ui-calculator-l9mf.vercel.app/", category: "cli" },
  { id: 51, title: "Physical AI & Humanoid Robotics Textbook", img: "/project-51.png", link: "https://physical-ai-humanoid-robotics-book-beige.vercel.app/", category: "cli" },
  { id: 52, title: "Custom Portfolio", img: "/project-52.png", link: "https://custom-portfolio-xi.vercel.app/", category: "html-css" },
  { id: 53, title: "Humanoid Robotic Book", img: "/project-53.png", link: "https://fariau.github.io/Humanoid-Robotic-Book/", category: "cli" },
  { id: 54, title: "Rock Paper Scissors", img: "/project-54.png", link: "https://rock-paper-scissors-orpin-alpha.vercel.app/", category: "html-css" },
  { id: 55, title: "Tic Tac Toe ", img: "/project-55.png", link: "https://tic-tac-toe-sable-zeta-29.vercel.app/", category: "html-css" },
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
    <div className="mb-12 w-full">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center text-zinc-100 tracking-tight mb-8"
      >
        {title}
      </motion.h2>

      <div className="relative w-full max-w-4xl lg:max-w-5xl aspect-[4/3] sm:aspect-[16/10] md:aspect-video mx-auto flex items-center justify-center">
        {stack.map((project, index) => (
          <motion.div
            key={project.id}
            className="absolute w-[58%] sm:w-[54%] md:w-[50%] lg:w-[46%] aspect-[4/3] sm:aspect-[16/10] md:aspect-video rounded-3xl overflow-hidden border border-zinc-700 shadow-2xl bg-zinc-900"
            style={{ zIndex: stack.length - index }}
            animate={{
              x: positions[index]?.x ?? 0,
              y: positions[index]?.y ?? 0,
              rotate: positions[index]?.rotate ?? 0,
            }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            whileHover={{
              scale: 1.06,
              rotate: 0,
              x: 0,
              y: -20,
              boxShadow: "0 0 40px rgba(139, 92, 246, 0.3)",
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />

              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 tracking-tight">
                  {project.title}
                </h3>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 font-medium text-sm flex items-center gap-2 transition-colors"
                  >
                    View Live Project <span aria-hidden="true">→</span>
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

  const nextjsProjects = projects.filter(p => p.category === "nextjs");
  const typescriptProjects = projects.filter(p => p.category === "typescript");
  const htmlCssProjects = projects.filter(p => p.category === "html-css");
  const pythonProjects = projects.filter(p => p.category === "python");
  const cliProjects = projects.filter(p => p.category === "cli");

  return (
    <section
      id="project"
      className="relative overflow-hidden bg-zinc-950 py-16 md:py-20 lg:py-24 px-5 md:px-8 lg:px-12"
    >
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 w-[700px] h-[700px] bg-violet-500/10 rounded-full blur-[140px]" />
        <div className="absolute right-1/4 bottom-1/4 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[130px]" />
      </div>

      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center mb-14 relative z-10"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tighter">
          My <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
          A collection of web applications, tools, and experiments built with modern technologies
        </p>
      </motion.div>

      {/* Category Stacked Sections */}
      <StackedSection title="Next.js Web Projects" categoryProjects={nextjsProjects} />
      <StackedSection title="Python & Streamlit Projects" categoryProjects={pythonProjects} />
      <StackedSection title="CLI & Other Tools" categoryProjects={cliProjects} />
      <StackedSection title="HTML & CSS Projects" categoryProjects={htmlCssProjects} />
      <StackedSection title="TypeScript Projects" categoryProjects={typescriptProjects} />


      {/* View All Projects Button */}
      <div className="flex justify-center mt-16">
        <button
          onClick={() => setIsModalOpen(true)}
          className="group px-10 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 
             hover:from-violet-500 hover:to-fuchsia-500 
             active:from-violet-700 active:to-fuchsia-700
             text-white font-semibold text-lg rounded-2xl 
             transition-all duration-300 flex items-center gap-3 
             shadow-lg shadow-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/50 
             border border-violet-400/20 hover:border-violet-400/40"
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