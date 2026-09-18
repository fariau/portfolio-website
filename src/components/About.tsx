"use client";

import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { value: "60+", label: "Projects Built" },
    { value: "1mo", label: "Internship" },
    { value: "9+", label: "Certificates" },
    { value: "16+", label: "Technologies" },
  ];

  return (
    <section 
      id="about" 
      className="relative w-full bg-zinc-950 pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/8 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Heading */}
        <div className="relative mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tighter"
          >
            About <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full"
          />
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-center hover:border-brand-500/40 transition-colors">
              <p className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
                {s.value}
              </p>
              <p className="text-xs text-zinc-500 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="space-y-7 text-zinc-400 text-[17px] md:text-lg leading-relaxed">
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            I&apos;m an <span className="text-zinc-200 font-medium">AI Engineer & Agentic AI Developer</span>, building{" "}
            <span className="text-brand-300 font-medium">AI Agents</span> and{" "}
            <span className="text-brand-300 font-medium">Agentic AI</span> systems on the OpenAI API,
            with automation workflows backed by strong prompt engineering.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            I recently completed a{" "}
            <span className="text-zinc-200 font-medium">1-month Frontend Developer Internship</span> at{" "}
            <span className="text-zinc-200 font-medium">Nexe-Agent</span>, an AI-powered software solutions company,
            where I worked on real-world tasks including landing pages, animated UI components, admin dashboards,
            multi-step forms, a component library, and a real-time WebSocket-powered notification dashboard.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            I am currently enrolled in the prestigious{" "}
            <span className="text-zinc-200 font-medium">Governor Initiative for Artificial Intelligence and Computing (GIAIC)</span>, 
            pursuing an advanced program specializing in AI, Web 3.0, and the Metaverse.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            My frontend work spans <span className="text-brand-300 font-medium">React.js</span> and{" "}
            <span className="text-brand-300 font-medium">Next.js</span>, along with TypeScript, HTML, CSS,
            and Tailwind CSS for responsive, high-performance interfaces. On the AI side, I use Python and
            Streamlit for tools and automation, Chainlit for conversational interfaces, and{" "}
            <span className="text-brand-300 font-medium">Claude Code</span> with CLI tools to speed up
            AI-assisted development.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            I strongly believe in writing clean, maintainable code with thoughtful user experience design. My goal is to become a strong full-stack developer and contribute to impactful digital solutions.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 text-zinc-500 italic border-l-4 border-brand-600 pl-5"
          >
            I am a dedicated lifelong learner who continuously explores new technologies and improves skills in both development and AI.
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default About;