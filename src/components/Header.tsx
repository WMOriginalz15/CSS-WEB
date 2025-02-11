import React from 'react';
import { NavLinks } from './NavLinks';
import Logo from '../assets/css-logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={Logo}
              alt="CSS KUC Logo" 
              className="h-14 w-auto md:h-16 lg:h-18"
              style={{ 
                objectFit: 'contain',
                maxWidth: '200px',
                marginRight: '1rem'
              }}
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks className="flex items-center space-x-8" />
            <a
              href="http://kucelearning.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#0181AA] text-white text-sm font-medium rounded-md hover:bg-[#0171A0] transition-colors"
            >
              E-learning Portal
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="h-6 w-6 text-gray-600" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <NavLinks 
              className="flex flex-col space-y-4" 
              itemClassName="px-2 py-1 text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a
                href="http://kucelearning.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-[#0181AA] text-white text-center text-sm font-medium rounded-md hover:bg-[#0171A0] transition-colors"
              >
                E-learning Portal
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}