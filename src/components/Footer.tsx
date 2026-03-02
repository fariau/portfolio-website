import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#2d1b3f] border-t border-[#c7b3e6]/20 mt-0">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-[#e0d9d9] text-sm md:text-base font-medium">
            © {currentYear} Faria Usman — All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <a
              href="https://github.com/fariau"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#e0d9d9] hover:text-[#f4a261] transition-colors duration-200"
            >
              <AiFillGithub size={26} />
            </a>

            <a
              href="https://www.linkedin.com/in/faria-usman-856415309"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#e0d9d9] hover:text-[#f4a261] transition-colors duration-200"
            >
              <AiFillLinkedin size={26} />
            </a>

            <a
              href="mailto:fariausman17@gmail.com"
              aria-label="Email"
              className="text-[#e0d9d9] hover:text-[#f4a261] transition-colors duration-200"
            >
              <AiOutlineMail size={26} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;