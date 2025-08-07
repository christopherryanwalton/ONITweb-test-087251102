import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import config from '../config';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md border-b border-gray-200' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Area */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">ON</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-800 leading-none">{config.siteName}</span>
              <span className="text-xs text-blue-600 leading-none font-medium">{config.siteTagline}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`relative py-2 px-1 transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Home
              {isActive('/') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              )}
            </Link>
            <Link
              to="/about"
              className={`relative py-2 px-1 transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              About
              {isActive('/about') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              )}
            </Link>
            <Link
              to="/contact"
              className={`relative py-2 px-1 transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-blue-600 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-2 space-y-2">
              <Link
                to="/"
                className={`block w-full text-left py-3 px-2 rounded transition-colors ${
                  isActive('/')
                    ? 'text-blue-600 bg-blue-50 font-medium'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block w-full text-left py-3 px-2 rounded transition-colors ${
                  isActive('/about')
                    ? 'text-blue-600 bg-blue-50 font-medium'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`block w-full text-left py-3 px-2 rounded transition-colors ${
                  isActive('/contact')
                    ? 'text-blue-600 bg-blue-50 font-medium'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
