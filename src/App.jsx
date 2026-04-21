import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoffeeAnimation from './components/CoffeeAnimation';
import ProductsShowcase from './components/ProductsShowcase';
import Menu from './components/Menu';
import Story from './components/Story';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CoffeeAnimation />
      <ProductsShowcase />
      <Menu />
      <Story />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
