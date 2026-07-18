import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { Button } from './Button';
import { Sun, Moon, Menu } from 'lucide-react';
import { gsap } from 'gsap';
import './Nav.css';

export function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add('scrolled');
      } else {
        navRef.current.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav ref={navRef} className="nav nav-sticky">
      <div className="container nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src="https://veniteuniversity.edu.ng/wp-content/uploads/2024/04/venite-logo-1-1-1.png" alt="Venite University Logo" className="logo-img" />
          </Link>
        </div>

        <div className="nav-links desktop-only">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
          <NavLink to="/programmes" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Programmes</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button className="mobile-menu-btn mobile-only" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
        <NavLink to="/programmes" onClick={() => setIsOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Programmes</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
      </div>
    </nav>
  );
}
