import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';

const menuItems = [
  { id: 1, name: 'Aura Pour Over', category: 'coffee', price: '$5.50', desc: 'Single origin hand poured to perfection.' },
  { id: 2, name: 'Velvet Latte', category: 'coffee', price: '$4.80', desc: 'Smooth espresso with micro-foamed milk.' },
  { id: 3, name: 'Iced Matcha', category: 'cold', price: '$5.00', desc: 'Ceremonial grade matcha over ice.' },
  { id: 4, name: 'Cold Brew Fizz', category: 'cold', price: '$4.50', desc: '24hr cold brew topped with sparkling water.' },
  { id: 5, name: 'Tiramisu Croissant', category: 'dessert', price: '$6.00', desc: 'Flaky pastry with mascarpone cream.' },
  { id: 6, name: 'Lemon Tart', category: 'dessert', price: '$5.50', desc: 'Zesty lemon curd in a butter shell.' }
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'cold', label: 'Cold Drinks' },
  { id: 'dessert', label: 'Desserts' }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section menu-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Curated Menu</h2>
          <div className="menu-filters">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="menu-grid">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="menu-item"
              >
                <div className="menu-item-header">
                  <h4 className="menu-item-name">{item.name}</h4>
                  <div className="menu-item-line"></div>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p className="menu-item-desc">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
