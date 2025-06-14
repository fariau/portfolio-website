import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="mt-24 py-6 bg-red-300 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-base font-medium text-center md:text-left mb-4 md:mb-0">
          © 2024 Faria Usman — All rights reserved.
        </p>

        {/* Social Links aligned right */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/fariau"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-black transition"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/faria-usman-856415309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-black transition"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="mailto:fariausman17@gmail.com"
            aria-label="Email"
            className="hover:text-black transition"
          >
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
