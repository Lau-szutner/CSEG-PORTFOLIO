'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navBarLinks: string[] = [
    'Inicio',
    'Biografía',
    'Clientes',
    'Servicios',
    'Edición',
    'Fotografía',
    // 'Content Creator',
  ];

  return (
    <nav className="fixed top-0 z-30 w-full px-4 py-4 md:px-10">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]">
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-between px-8 py-4">
          {navBarLinks.map((link, index) => (
            <li
              key={index}
              className="group relative cursor-pointer text-[10px] font-light uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-white"
            >
              <a href={`#${link}`}>{link}</a>
              {/* Línea minimalista que aparece abajo en hover */}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-between px-4 py-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10">
            <ul className="px-4 py-4 space-y-4">
              {navBarLinks.map((link, index) => (
                <li
                  key={index}
                  className="group relative cursor-pointer text-sm font-light uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                  {/* Línea minimalista que aparece abajo en hover */}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
