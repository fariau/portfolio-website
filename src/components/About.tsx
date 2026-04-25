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
            I am currently enrolled in the prestigious 
            <span className="text-zinc-200 font-medium"> Governor Initiative for Artificial Intelligence and Computing (GIAIC)</span>, 
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
            My primary passion lies in modern frontend development. I build responsive, high-performance, and user-centric applications using 
            <span className="text-violet-300 font-medium"> React.js</span>, 
            <span className="text-violet-300 font-medium"> Next.js</span>, 
            <span className="text-violet-300 font-medium"> HTML</span>, 
            <span className="text-violet-300 font-medium"> CSS</span>, 
            <span className="text-violet-300 font-medium"> JavaScript</span>, and 
            <span className="text-violet-300 font-medium"> Tailwind CSS</span>.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            I also use 
            <span className="text-violet-300 font-medium"> TypeScript</span> for building type-safe and scalable applications,{" "}
            <span className="text-violet-300 font-medium"> Python</span> for automation, scripting, and small AI-based tools, and{" "}
            <span className="text-violet-300 font-medium"> Docusaurus</span> for creating structured and clean technical documentation.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            My AI skillset includes 
            <span className="text-violet-300 font-medium"> Prompt Engineering</span>,{" "}
            <span className="text-violet-300 font-medium"> Claude Code</span>, and{" "}
            <span className="text-violet-300 font-medium"> CLI tools</span>, which I use to improve productivity, automate workflows, and build smarter development processes.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            I strongly believe in writing clean, maintainable code with thoughtful user experience design. My goal is to become a strong full-stack developer and contribute to impactful digital solutions.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-6 text-zinc-500 italic border-l-4 border-violet-500 pl-5"
          >
            I am a dedicated lifelong learner who continuously explores new technologies and improves skills in both development and AI.
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default About;