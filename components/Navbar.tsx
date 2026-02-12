
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/#contact' },
  ];

  const handleLinkClick = (path: string) => {
    setIsOpen(false);
    if (path.includes('#')) {
      const id = path.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-white uppercase">MrJawwadAli</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleLinkClick(link.path)}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                location.pathname === link.path ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="px-5 py-2 bg-white text-black font-bold text-sm rounded-full hover:bg-blue-400 hover:text-white transition-all active:scale-95"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className="text-2xl font-bold text-white hover:text-blue-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
