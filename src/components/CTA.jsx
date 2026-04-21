import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-bg-img" />
      <div className="cta-grain" />
      <div className="cta-overlay" />

      {/* Floating decorative elements */}
      <div className="cta-deco cta-deco-1" />
      <div className="cta-deco cta-deco-2" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <motion.span 
            className="cta-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ✦ Reserve Your Experience ✦
          </motion.span>

          <h2 className="cta-title">Your Table<br /><span className="cta-title-accent">is Waiting</span></h2>
          
          <p className="cta-text">
            Step into a world of rich aromas and warm ambience. Reserve a spot or order 
            your favorite brew for pickup — every cup is crafted just for you.
          </p>

          <div className="cta-buttons">
            <motion.button 
              className="cta-btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Visit Us Today
            </motion.button>
            <motion.button 
              className="cta-btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Order Online
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="cta-info-strip"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="cta-info-card glass">
            <MapPin size={22} />
            <div>
              <strong>Find Us</strong>
              <span>123 Brew Lane, Downtown</span>
            </div>
          </div>
          <div className="cta-info-card glass">
            <Clock size={22} />
            <div>
              <strong>Open Daily</strong>
              <span>7:00 AM — 10:00 PM</span>
            </div>
          </div>
          <div className="cta-info-card glass">
            <Phone size={22} />
            <div>
              <strong>Call Us</strong>
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
