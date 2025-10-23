import React, { useState } from 'react';
import { LogoIcon, MenuIcon, CloseIcon } from './Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['Product', 'Pricing', 'Company', 'Blog', 'Changelog'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="py-5 relative z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between">
            {/* Left Side */}
            <div className="flex items-center space-x-8">
                <a href="#" className="flex items-center space-x-2">
                <LogoIcon className="h-7 w-7 text-white" />
                <span className="text-white font-semibold text-lg">Reflect</span>
                </a>
                <ul className="hidden md:flex items-center space-x-6">
                {navLinks.map((link) => (
                    <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                        {link}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            {/* Right Side (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Login
                </a>
                <a href="#" className="relative inline-block text-sm font-medium text-white p-px rounded-lg group">
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg"></span>
                    <span className="relative block px-4 py-2 bg-[#171133] rounded-lg group-hover:bg-opacity-90 transition-all duration-200">
                        Start free trial
                    </span>
                </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={toggleMenu} aria-label="Open menu">
                <MenuIcon className="h-6 w-6 text-white" />
                </button>
            </div>
            </nav>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" onClick={toggleMenu}></div>
        
        {/* Menu Content */}
        <div className={`absolute top-0 right-0 h-full w-full max-w-xs bg-[#0a0717] shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center p-5 border-b border-white/10">
            <a href="#" className="flex items-center space-x-2">
              <LogoIcon className="h-7 w-7 text-white" />
              <span className="text-white font-semibold text-lg">Reflect</span>
            </a>
            <button onClick={toggleMenu} aria-label="Close menu">
              <CloseIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="p-5">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="block py-2 text-gray-300 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <hr className="my-6 border-white/10" />
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-center py-2 text-gray-300 hover:text-white transition-colors duration-200">
                Login
              </a>
              <a href="#" className="relative inline-block text-center font-medium text-white p-px rounded-lg group">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg"></span>
                <span className="relative block w-full px-4 py-3 bg-[#171133] rounded-lg group-hover:bg-opacity-90 transition-all duration-200">
                    Start free trial
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;