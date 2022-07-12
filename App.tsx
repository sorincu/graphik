import * as React from 'react';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './index.css';

// data
import categories from './data/categories';

// modules
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './components/Menu';

// routes
import Home from './routes/Home';
import About from './routes/About';
import ArticlesByType from './routes/ArticlesByType';
import Article from './routes/Article';

export default function App() {
  const [showMenu, setShowMenu] = useState(true);

  function openMenu() {
    setShowMenu(true);
  }

  function closeMenu() {
    setShowMenu(false);
  }

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

        <Route path="/articles/:articleId/*" element={<Article />} />
      </Routes>

      <Menu showMenu={showMenu} />

      <Footer />
    </div>
  );
}
