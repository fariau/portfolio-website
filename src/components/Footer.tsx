"use client";

import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left - Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-zinc-400 text-sm md:text-base font-medium"
          >
            © {currentYear} Faria Usman — All rights reserved.
          </motion.p>

          {/* Right - Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-7"
          >
            <a
              href="https://github.com/fariau"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-400 hover:text-violet-400 transition-all duration-300 hover:scale-110"
            >
              <AiFillGithub size={26} />
            </a>

            <a
              href="https://www.linkedin.com/in/faria-usman-856415309"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-400 hover:text-violet-400 transition-all duration-300 hover:scale-110"
            >
              <AiFillLinkedin size={26} />
            </a>

            <a
              href="mailto:fariausman17@gmail.com"
              aria-label="Email"
              className="text-zinc-400 hover:text-violet-400 transition-all duration-300 hover:scale-110"
            >
              <AiOutlineMail size={26} />
            </a>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;