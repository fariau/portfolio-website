"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
];

const StackedSection = ({ title, categoryProjects }: { title: string; categoryProjects: ProjectType[] }) => {
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
    <div className="mb-16 lg:mb-24 w-full">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 md:mb-14 text-[#f8f1f1] tracking-tight"
      >
        {title}
      </motion.h2>

      <div className="relative w-full max-w-4xl lg:max-w-5xl aspect-[4/3] sm:aspect-[16/10] md:aspect-video mx-auto flex items-center justify-center">
        {stack.map((project, index) => (
          <motion.div
            key={project.id}
            className="absolute w-[84%] sm:w-[76%] md:w-[68%] lg:w-[62%] aspect-[4/3] sm:aspect-[16/10] md:aspect-video rounded-2xl overflow-hidden border border-[#c7b3e6]/20 shadow-xl bg-[#2d1b3f]/90 backdrop-blur-md"
            style={{ zIndex: stack.length - index }}
            animate={{
              x: positions[index]?.x ?? 0,
              y: positions[index]?.y ?? 0,
              rotate: positions[index]?.rotate ?? 0,
            }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            whileHover={{
              scale: 1.07,
              rotate: 0,
              x: 0,
              y: -30,
              boxShadow: "0 0 50px rgba(244, 162, 97, 0.25)", // peach/coral glow
              transition: { duration: 0.4 },
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 84vw, (max-width: 1200px) 68vw, 62vw"
                priority={index < 2}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none" />

              <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-end text-[#e0d9d9]">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4 tracking-tight">
                  {project.title}
                </h3>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f4a261] hover:text-[#ff9f80] font-medium text-sm sm:text-base transition-colors inline-flex items-center gap-2"
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
  const nextjsProjects    = projects.filter(p => p.category === "nextjs");
  const typescriptProjects = projects.filter(p => p.category === "typescript");
  const htmlCssProjects    = projects.filter(p => p.category === "html-css");
  const pythonProjects     = projects.filter(p => p.category === "python");

  return (
    <section
      id="project"
      className="relative overflow-hidden bg-[#2d1b3f] py-24 md:py-32 px-5 md:px-8 lg:px-12 min-h-screen"
    >
      {/* Subtle background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[420px] h-[350px] md:h-[500px] bg-[#f4a261]/10 rounded-full blur-[100px] md:blur-[160px]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[420px] h-[350px] md:h-[500px] bg-[#c7b3e6]/8 rounded-full blur-[100px] md:blur-[160px]" />
      </div>

      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center mb-16 md:mb-20 relative z-10"
      >
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f8f1f1] tracking-tight">
          My <span style={{ color: '#f4a261' }}>Projects</span>
        </h1>
      </motion.div>

      {/* Category sections */}
      <StackedSection title="Next.js Web Projects" categoryProjects={nextjsProjects} />
      <StackedSection title="TypeScript Projects" categoryProjects={typescriptProjects} />
      <StackedSection title="HTML & CSS Static Websites" categoryProjects={htmlCssProjects} />
      <StackedSection title="Python & Streamlit Applications" categoryProjects={pythonProjects} />
    </section>
  );
}