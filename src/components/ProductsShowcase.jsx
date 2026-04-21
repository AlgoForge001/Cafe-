import React from 'react';
import { motion } from 'framer-motion';
import './ProductsShowcase.css';

const products = [
  { id: 1, title: "Signature Espresso", description: "Bold blend with notes of dark chocolate.", image: "/074a92bc02bd727b7b27e00d4d969b22.jpg", sizeClass: "card-large" },
  { id: 2, title: "Velvet Latte", description: "Smooth, creamy, and perfectly balanced.", image: "/23ac216942dc20dc4330e575d914cce9.jpg", sizeClass: "card-small" },
  { id: 3, title: "Artisan Pastry", description: "Flaky, buttery perfection baked daily.", image: "/342de7eae17527078403bad2a4f393ec.jpg", sizeClass: "card-small" },
  { id: 4, title: "Pour Over", description: "Clean, nuanced flavor profile.", image: "/3ed21172b861fd337cbcf3e5f1b8a095.jpg", sizeClass: "card-tall" },
  { id: 5, title: "Matcha Fusion", description: "Ceremonial grade matcha with oat milk.", image: "/617233a27a4f124893db3127bf4d7879.jpg", sizeClass: "card-small" },
  { id: 6, title: "Cold Brew", description: "Steeped for 18 hours for maximum smoothness.", image: "/704b7cc6a8cd9cd10a244dd4a682eb73.jpg", sizeClass: "card-small" },
  { id: 7, title: "Mocha Delight", description: "Rich espresso combined with dark cocoa.", image: "/7d6fd855cf63d627942d1e4bf31eac3e.jpg", sizeClass: "card-wide" },
  { id: 8, title: "Seasonal Tart", description: "Fresh fruit and vanilla custard.", image: "/811f47bd39173689915e1ea5c263de3d.jpg", sizeClass: "card-small" },
  { id: 9, title: "Caramel Macchiato", description: "Sweet caramel drizzle over robust espresso.", image: "/a67076fc87edee0b7a5441da6c9f2564.jpg", sizeClass: "card-small" },
  { id: 10, title: "Avocado Toast", description: "Artisan sourdough with fresh avocado.", image: "/f3b8c54dc8fa6cd55df86d84f197e137.jpg", sizeClass: "card-small" },
  { id: 11, title: "Iced Americano", description: "Crisp, refreshing, and bold.", image: "/fab442b1e7f1e0ba528241081cb0ed46.jpg", sizeClass: "card-wide" },
  { id: 12, title: "Vanilla Bean", description: "Real vanilla bean infused latte.", image: "/feb199aa0236407769a97cbba9ff41d2.jpg", sizeClass: "card-tall" }
];

const ProductsShowcase = () => {
  return (
    <section id="showcase" className="section showcase-section">
      <div className="glass-blob blob-1"></div>
      <div className="glass-blob blob-2"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our Masterpieces</h2>
          <p className="section-subtitle">Crafted with precision, served with passion.</p>
        </motion.div>

        <div className="showcase-bento">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={`bento-card ${product.sizeClass}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              whileHover={{ scale: 0.98 }}
            >
              <img src={product.image} alt={product.title} className="bento-bg-img" />
              <div className="bento-overlay"></div>
              
              <div className="bento-content glass">
                <h3 className="bento-title">{product.title}</h3>
                <p className="bento-desc">{product.description}</p>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            className="bento-card card-wide bento-quote glass"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="quote-content">
               <h3 className="quote-text">"Coffee is a language in itself, a way to connect, to pause, and to appreciate the artistry in every drop."</h3>
               <p className="quote-author">— The Aura Philosophy</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
