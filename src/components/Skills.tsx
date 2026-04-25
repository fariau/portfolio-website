"use client";

import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "📄" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "Python", icon: "🐍" },
    { name: "Docusaurus", icon: "📚" },
    { name: "Prompt Engineering", icon: "🧠" },
    { name: "Claude Code", icon: "🤖" },
    { name: "CLI Tools", icon: "💻" },
  ];

  return (
    <section
      id="skills"
      className="w-full bg-zinc-950 pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-7"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tighter">
              Technologies I{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Work With
              </span>
            </h2>

            <div className="space-y-5 text-zinc-400 text-[17px] leading-relaxed">

              <p>
                I build modern and responsive web applications using{" "}
                <span className="text-violet-300 font-medium">HTML</span>,{" "}
                <span className="text-violet-300 font-medium">CSS</span>,{" "}
                <span className="text-violet-300 font-medium">JavaScript</span>,{" "}
                <span className="text-violet-300 font-medium">React.js</span>,{" "}
                <span className="text-violet-300 font-medium">Next.js</span>, and{" "}
                <span className="text-violet-300 font-medium">Tailwind CSS</span>.
              </p>

              <p>
                I also use{" "}
                <span className="text-violet-300 font-medium">TypeScript</span> for type-safe development,{" "}
                <span className="text-violet-300 font-medium">Python</span> for scripting and automation, and{" "}
                <span className="text-violet-300 font-medium">Docusaurus</span> for creating structured documentation websites.
              </p>

              <p>
                My AI skillset includes{" "}
                <span className="text-violet-300 font-medium">Prompt Engineering</span> for crafting effective AI prompts,{" "}
                <span className="text-violet-300 font-medium">Claude Code</span> for AI-assisted development workflows, and{" "}
                <span className="text-violet-300 font-medium">CLI tools</span> for working efficiently with command-line interfaces and automation.
              </p>

              <p className="text-zinc-500 italic">
                Passionate about clean code, modern UI design, and continuously learning new technologies.
              </p>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-zinc-900 border border-zinc-800 hover:border-violet-500 
                rounded-2xl p-4 flex flex-col items-center justify-center
                min-h-[95px] transition-all duration-300"
              >
                <div className="text-2xl mb-2">{skill.icon}</div>
                <h3 className="text-sm md:text-base font-medium text-zinc-100 text-center">
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