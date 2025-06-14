'use client';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ['Home', 'About', 'Project', 'Skills', 'Contact'];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-300">Faria Usman</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-white text-lg font-medium">
          {navItems.map((item) => (
            <li key={item} className="hover:text-red-300 transition">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul className="md:hidden bg-[#1f1f1f]/90 text-white px-4 pb-4 space-y-4 text-lg">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="block hover:text-red-300 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
