import React from 'react';
import { motion } from 'framer-motion';
import './Story.css';

const Story = () => {
  return (
    <section id="story" className="section story-section">
      <div className="story-bg-animated"></div>
      <div className="container">
        <motion.div 
          className="story-content text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <span className="story-label">Our Heritage</span>
          <h2 className="story-title">A Symphony of Beans</h2>
          <div className="story-text">
            <p style={{ marginBottom: '1.5rem' }}>
              It began over two decades ago with a simple, unwavering belief: coffee is more than a mere beverage; it's a sensory experience that brings people together. Our founders traveled the globe to discover the most exceptional, ethically sourced beans from sustainable farms in the highest altitudes.
            </p>
            <p>
              Every cup we pour is a culmination of this journey—crafted with artisanal roasting techniques passed down through generations, and a relentless passion for the art of coffee making. From the rich aroma that fills our space to the very last drop, we pour our heart into every detail. Welcome to our sanctuary, where every sip tells a story.
            </p>
          </div>
          <img src="/0663df0153aeb3771271511bda808b06.jpg" alt="Coffee Heritage" className="story-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
