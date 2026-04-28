import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Menu as MenuIcon, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar-container container">
        <a href="#" className="navbar-logo">
          <Coffee size={28} className="logo-icon" />
          <span className="font-serif">Cafe_name</span>
        </a>

        <ul className="navbar-links desktop-only">
          <li><a href="#showcase" className="nav-link-item">Products</a></li>
          <li><a href="#menu" className="nav-link-item">Menu</a></li>
          <li><a href="#story" className="nav-link-item">Our Story</a></li>
          <li><span className="nav-divider" /></li>
          <li><button className="nav-cta-btn">Order Now</button></li>
        </ul>

        <button className="mobile-toggle mobile-only" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ul>
            <li><a href="#showcase" onClick={() => setMobileMenuOpen(false)}>Products</a></li>
            <li><a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a></li>
            <li><a href="#story" onClick={() => setMobileMenuOpen(false)}>Our Story</a></li>
            <li><button className="nav-cta-btn" style={{ marginTop: '0.5rem' }}>Order Now</button></li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
