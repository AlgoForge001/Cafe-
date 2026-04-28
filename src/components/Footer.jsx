import React from 'react';
import { MapPin, Mail, Phone, Globe, Camera, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo font-serif">Cafe_name</h3>
            <p className="footer-tagline">Elevating the coffee experience, one cup at a time.</p>
            <div className="social-links">
              <a href="#" className="social-icon"><Camera size={20} /></a>
              <a href="#" className="social-icon"><MessageCircle size={20} /></a>
              <a href="#" className="social-icon"><Globe size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Explore</h4>
            <ul>
              <li><a href="#showcase">Our Masterpieces</a></li>
              <li><a href="#menu">Curated Menu</a></li>
              <li><a href="#story">Our Heritage</a></li>
              <li><a href="#">Shop Beans</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contact</h4>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>123 Artisan Way, Coffee District, NY 10012</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>hello@auracafe.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Backyard Café. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
