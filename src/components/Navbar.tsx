import React, { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Tokenomics', href: '#tokenomics' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Community', href: '#community' },
  { name: 'Donate', href: '#donate' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-cyan-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-cyan-400">
          <img src="/favi.ico" alt="KPIRATE Logo" className="h-14 w-14 rounded-full" />
          <span className="hidden sm:inline font-pirata tracking-wider">KPIRATE</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-gray-200 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center text-cyan-400 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-cyan-900 px-4 pb-4">
          <div className="flex flex-col gap-4 mt-2">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-semibold text-gray-200 hover:text-cyan-400 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 