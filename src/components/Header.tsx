'use client';

import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#project' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-xl shadow-xl shadow-black/60 border-b border-zinc-700'
          : 'bg-zinc-950/70 backdrop-blur-lg border-b border-transparent'
        }`}
    >
      <nav className="container mx-auto px-5 sm:px-8 lg:px-12 py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
            Faria
          </span>
          <span className="text-2xl md:text-3xl font-bold tracking-tighter bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Usman
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-9 text-zinc-200 text-base font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-violet-400 transition-all duration-200 relative py-1 group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-violet-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-200 hover:text-violet-400 transition-colors focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <AiOutlineClose size={28} />
          ) : (
            <AiOutlineMenu size={28} />
          )}
        </button>
      </nav>

      {/* ==================== MOBILE MENU  ==================== */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg transition-all duration-300 z-[60] ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={toggleMenu}
      >
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-zinc-950 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-zinc-700 bg-zinc-900">
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold text-white">Faria</span>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Usman
              </span>
            </div>

            <button
              onClick={toggleMenu}
              className="text-zinc-400 hover:text-violet-400 transition-colors p-2 hover:bg-zinc-800 rounded-xl"
              aria-label="Close menu"
            >
              <AiOutlineClose size={28} />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col p-6 space-y-3 text-lg text-zinc-200 bg-zinc-900">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={toggleMenu}
                  className="block py-4 px-6 rounded-2xl hover:bg-zinc-800 hover:text-violet-400 transition-all duration-200 font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Links & Resume Section */}
          <div className="px-6 pb-8 pt-6 bg-zinc-900 border-t border-zinc-700">
            <p className="text-zinc-400 text-sm mb-5 px-4 font-medium">Connect with me</p>

            <div className="flex items-center gap-4 px-4 mb-8">
              <a
                href="https://www.linkedin.com/in/faria-usman-856415309"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-violet-400 transition-all p-4 hover:bg-zinc-800 rounded-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/fariau"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-violet-400 transition-all p-4 hover:bg-zinc-800 rounded-2xl"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://twitter.com/fariausman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-violet-400 transition-all p-4 hover:bg-zinc-800 rounded-2xl"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
            </div>

            {/* Download Resume Button */}
            <div className="px-4">
              <a
                href="https://my-resume-henna-delta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group inline-flex items-center justify-center gap-3 py-3.5 px-6 
                           bg-gradient-to-r from-violet-600 to-fuchsia-600 
                           hover:from-violet-500 hover:to-fuchsia-500 
                           active:from-violet-700 active:to-fuchsia-700
                           text-white font-medium rounded-2xl transition-all duration-300 
                           shadow-md hover:shadow-violet-500/40 border border-violet-400/20"
              >
                See My Resume
                <span className="transition-transform group-hover:translate-x-1">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;