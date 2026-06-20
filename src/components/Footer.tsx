"use client";

import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#project" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-10">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-zinc-800/60">

          {/* Logo + tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-xl font-bold text-zinc-100 tracking-tight">
              Faria <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Usman</span>
            </p>
            <p className="text-zinc-500 text-sm mt-1">Frontend Developer & AI Engineer</p>
          </motion.div>

          {/* Nav links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-zinc-400 hover:text-violet-400 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-5"
          >
            <a
              href="https://github.com/fariau"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-400 hover:text-violet-400 transition-all duration-300 hover:scale-110"
            >
              <AiFillGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/faria-usman-856415309"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-400 hover:text-violet-400 transition-all duration-300 hover:scale-110"
            >
              <AiFillLinkedin size={24} />
            </a>
            <a
              href="mailto:fariausman17@gmail.com"
              aria-label="Email"
              className="text-zinc-400 hover:text-violet-400 transition-all duration-300 hover:scale-110"
            >
              <AiOutlineMail size={24} />
            </a>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-zinc-500 text-sm text-center pt-6"
        >
          © {currentYear} Faria Usman — All rights reserved. Built with Next.js & Tailwind CSS.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;