import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './index.css';

// modules
import Navbar from './components/Navbar';

// routes
import Home from './routes/Home';
import About from './routes/About';

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        {/* <Route
          path="/products/all/:productId/*"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categoryId" element={<Products />} /> */}
      </Routes>
    </div>
  );
}
