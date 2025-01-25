
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="container pt-8">
            <div className="flex justify-between items-center">
                {/* Logo/Brand */}
                <div className="text-2xl font-semibold">Faria Usman</div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-10 lg:gap-16">
                    <li className="menuLink">
                        <a href="#hero">Home</a>
                    </li>
                    <li className="menuLink">
                        <a href="#about">About</a>
                    </li>
                    <li className="menuLink">
                        <a href="#project">Projects</a>
                    </li>
                    <li className="menuLink">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="menuLink">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

                {/* Hamburger Menu */}
                <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                    {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <ul className="flex flex-col gap-4 mt-4 md:hidden bg-gray-100 text-black p-4 shadow-md">
                    <li className="menuLink">
                        <a href="#hero" onClick={toggleMenu}>Home</a>
                    </li>
                    <li className="menuLink">
                        <a href="#project" onClick={toggleMenu}>Projects</a>
                    </li>
                    <li className="menuLink">
                        <a href="#skills" onClick={toggleMenu}>Skills</a>
                    </li>
                    <li className="menuLink">
                        <a href="#about" onClick={toggleMenu}>About</a>
                    </li>
                    <li className="menuLink">
                        <a href="#contact" onClick={toggleMenu}>Contact</a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
