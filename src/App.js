import React from "react";
import { Routes, Route } from "react-router-dom";
import Top from './components/Top'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog'
import CartCheckout from "./Pages/Cart"
import Shop from './Pages/Shop'
import Wish from './Pages/Wish'
import Product from "./Pages/Product";
import Order from "./Pages/Order";
const NotFound = () => (
  <div style={{ padding: '100px 20px', textAlign: 'center' }}>
    <h1>404</h1>
    <p>Page not found.</p>
  </div>
);

function App() {
  return (
    <>
      <Top />
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<CartCheckout />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />



      </Routes>

      <Footer />
    </>
  );
}

export default App;
