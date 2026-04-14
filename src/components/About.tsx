"use client";

import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <section 
      id="about" 
      className="w-full bg-zinc-950 pt-24 md:pt-32 pb-20 md:pb-28"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Heading */}
        <div className="relative mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tighter"
          >
            About <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-7 text-zinc-400 text-[17px] md:text-lg leading-relaxed">
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            I am currently enrolled in the prestigious <span className="text-zinc-200 font-medium">Governor Initiative for Artificial Intelligence and Computing (GIAIC)</span>, 
            where I am pursuing an advanced program specializing in 
            <span className="text-violet-300 font-medium"> Artificial Intelligence</span>, 
            <span className="text-violet-300 font-medium"> Web 3.0</span>, and the 
            <span className="text-violet-300 font-medium"> Metaverse</span>.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            My primary passion lies in modern frontend and full-stack web development. I build responsive, 
            high-performance, and user-centric applications using 
            <span className="text-violet-300 font-medium"> React.js</span>, 
            <span className="text-violet-300 font-medium"> Next.js</span>, 
            <span className="text-violet-300 font-medium"> TypeScript</span>, and 
            <span className="text-violet-300 font-medium"> Tailwind CSS</span>.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            I strongly believe in writing clean, maintainable code with thoughtful user experience design. 
            My goal is to evolve into a proficient full-stack developer capable of delivering impactful 
            digital solutions to real-world problems.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            In addition to web technologies, I actively use 
            <span className="text-violet-300 font-medium"> Python</span> for scripting, automation, 
            data processing, and building small utility tools. I am also proficient with Microsoft Office 
            tools for professional documentation, planning, and communication.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-6 text-zinc-500 italic border-l-4 border-violet-500 pl-5"
          >
            I am a dedicated lifelong learner with strong enthusiasm for emerging technologies and 
            continuously improving my craft to deliver high-quality, efficient solutions.
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default About;