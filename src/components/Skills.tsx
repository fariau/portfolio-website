"use client";

import React from 'react';
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "TypeScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "HTML", icon: "📄" },
    { name: "CSS", icon: "🎨" },
    { name: "Python", icon: "🐍" },
    { name: "Docusaurus", icon: "📚" },
    { name: "Microsoft Office", icon: "📊" },
  ];

  return (
    <section 
      id="skills" 
      className="w-full bg-zinc-950 pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left - Description */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-7"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tighter">
                Technologies I <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Master</span>
              </h2>
            </div>

            <div className="space-y-6 text-zinc-400 text-[17px] leading-relaxed">
              <p>
                I specialize in building modern, responsive, and high-performance web applications. 
                My core strength lies in the <span className="text-violet-300 font-medium">React.js</span> and 
                <span className="text-violet-300 font-medium"> Next.js</span> ecosystem, combined with 
                <span className="text-violet-300 font-medium"> Tailwind CSS</span> for creating clean and scalable user interfaces.
              </p>

              <p>
                I also work with <span className="text-violet-300 font-medium">TypeScript</span> for type-safe code and 
                <span className="text-violet-300 font-medium"> Python</span> for automation, scripting, and building useful tools.
              </p>

              <p className="text-zinc-500 italic">
                Fast learner with a passion for clean code, modern design systems, and staying up-to-date with the latest technologies.
              </p>
            </div>
          </motion.div>

          {/* Right - Skills Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 50, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.07,
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -10,
                  boxShadow: "0 0 35px rgba(139, 92, 246, 0.25)" 
                }}
                className="group bg-zinc-900 border border-zinc-700 hover:border-violet-500 
                           rounded-3xl p-7 md:p-9 flex flex-col items-center justify-center 
                           min-h-[140px] md:min-h-[160px] transition-all duration-300"
              >
                <div className="text-4xl mb-4 transition-transform group-hover:scale-125">
                  {skill.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-semibold text-zinc-100 text-center 
                               group-hover:text-violet-400 transition-colors tracking-tight">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;