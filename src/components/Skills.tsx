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
    { name: "Streamlit", icon: "🔴" },
    { name: "Chainlit", icon: "💬" },
    { name: "Docusaurus", icon: "📚" },
    { name: "Prompt Engineering", icon: "🧠" },
    { name: "Claude Code", icon: "🤖" },
    { name: "CLI Tools", icon: "💻" },
    { name: "Git & GitHub", icon: "🔧" },
    { name: "Vercel", icon: "▼" },
  ];

  return (
    <section
      id="skills"
      className="relative w-full bg-zinc-950 pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-[160px]" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-fuchsia-500/8 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-7"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tighter">
                Technologies I{" "}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Work With
                </span>
              </h2>
            </div>

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
                <span className="text-violet-300 font-medium">Streamlit</span> &{" "}
                <span className="text-violet-300 font-medium">Chainlit</span> to build interactive AI-powered apps.
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

            {/* Mini progress strip */}
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { label: "Frontend", value: 90 },
                { label: "AI & Automation", value: 75 },
                { label: "Tooling", value: 85 },
              ].map((p) => (
                <div key={p.label} className="flex-1 min-w-[120px]">
                  <div className="flex justify-between text-xs text-zinc-400 mb-1.5">
                    <span>{p.label}</span>
                    <span className="text-violet-400 font-semibold">{p.value}%</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ scale: 1.06, y: -5 }}
                className="group relative bg-zinc-900 border border-zinc-800 hover:border-violet-500 
                rounded-2xl p-4 flex flex-col items-center justify-center
                min-h-[95px] transition-all duration-300 overflow-hidden"
              >
                {/* hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-fuchsia-500/0 group-hover:from-violet-500/10 group-hover:to-fuchsia-500/10 transition-all duration-300" />

                <div className="text-2xl mb-2 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-sm md:text-base font-medium text-zinc-100 text-center relative z-10">
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