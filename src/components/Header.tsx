'use client';

import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#2d1b3f]/95 backdrop-blur-lg shadow-lg' 
          : 'bg-[#1e1430]/70 backdrop-blur-md'
      }`}
    >
      <nav className="container mx-auto px-5 sm:px-8 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: '#f8f1f1' }}>
          Faria <span style={{ color: '#f4a261' }}>Usman</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-[#e0d9d9] text-base lg:text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-[#f4a261] transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#f4a261] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          style={{ color: '#e0d9d9' }}
        >
          {isMenuOpen ? (
            <AiOutlineClose size={28} />
          ) : (
            <AiOutlineMenu size={28} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      >
        <div 
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-[#2d1b3f] shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-6 border-b border-[#c7b3e6]/20">
            <span className="text-xl font-bold" style={{ color: '#f8f1f1' }}>Menu</span>
            <button 
              onClick={toggleMenu}
              aria-label="Close menu"
              style={{ color: '#e0d9d9' }}
              className="hover:text-[#f4a261]"
            >
              <AiOutlineClose size={28} />
            </button>
          </div>

          <ul className="flex flex-col p-6 space-y-6 text-lg" style={{ color: '#e0d9d9' }}>
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={toggleMenu}
                  className="block py-2 hover:text-[#f4a261] transition-colors duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;