import * as React from 'react';
import styles from './css/App.module.css';
import Button from '@mui/material/Button';
import './index.css';

// modules
import Navbar from './components/Navbar';
import PrimaryArticles from './components/PrimaryArticles';
import Ad from './components/Ad';
import SecondaryArticles from './components/SecondaryArticles';
import Categories from './components/Categories';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <PrimaryArticles />
      <Ad />
      <SecondaryArticles />
      <Categories />
      <Footer />
    </div>
  );
}
