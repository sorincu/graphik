import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './index.css';

// data
import categories from './data/categories';

// modules
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// routes
import Home from './routes/Home';
import About from './routes/About';
import ArticlesByType from './routes/ArticlesByType';

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/popular" element={<ArticlesByType type="popular" />} />
        <Route path="/latest" element={<ArticlesByType type="latest" />} />

        {categories.map((category) => (
          <Route
            path={`/${category.type}`}
            element={<ArticlesByType type={category.type} />}
          />
        ))}

        {/* <Route
          path="/products/all/:productId/*"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categoryId" element={<Products />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}
