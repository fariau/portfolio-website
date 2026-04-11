"use client";

import React from 'react';
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Docusaurus", 
    "HTML",
    "CSS",
    "Python",
    "MS Office"
  ];

  return (
    <section 
      id="skills" 
      className="w-full bg-[#2d1b3f] pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Description */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f8f1f1] tracking-tight">
              Technologies <span style={{ color: '#f4a261' }}>I Work With</span>
            </h2>

            <p className="text-[#e0d9d9] text-base md:text-lg leading-relaxed">
              I specialize in modern frontend development with a strong command of HTML, CSS, and JavaScript. 
              My core expertise lies in building responsive, high-performance applications using 
              <span style={{ color: '#f4a261', fontWeight: 500 }}> React.js</span> and 
              <span style={{ color: '#f4a261', fontWeight: 500 }}> Next.js</span>, paired with 
              <span style={{ color: '#f4a261', fontWeight: 500 }}> Tailwind CSS</span> for clean, scalable, and maintainable UI design.
            </p>

            <p className="text-[#e0d9d9] text-base md:text-lg leading-relaxed">
              Beyond web technologies, I actively use 
              <span style={{ color: '#f4a261', fontWeight: 500 }}> Python</span> for scripting, automation, and small-scale data processing. 
              I am also proficient in Microsoft Office tools for documentation, planning, and professional communication.
            </p>

            <p className="text-[#c7b3e6] italic">
              I am a fast learner, always staying current with emerging tools and best practices to deliver efficient, high-quality solutions.
            </p>
          </motion.div>

          {/* Right - Skills Grid with better animation */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-6 lg:gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={skill}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  boxShadow: "0 0 30px rgba(244, 162, 97, 0.25)" 
                }}
                className="bg-[#1e1430]/80 border border-[#c7b3e6]/20 rounded-2xl p-6 md:p-8 
                           min-h-[110px] md:min-h-[130px] flex items-center justify-center 
                           hover:border-[#f4a261]/60 transition-all duration-300 group"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#e0d9d9] 
                               text-center leading-tight group-hover:text-[#f4a261] transition-colors">
                  {skill}
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