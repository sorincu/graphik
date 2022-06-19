import React = require('react');

// modules
import PrimaryArticles from '../components/PrimaryArticles';
import Ad from '../components/Ad';
import SecondaryArticles from '../components/SecondaryArticles';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <PrimaryArticles />
      <Ad />
      <SecondaryArticles />
      <Categories />
      <Footer />
    </div>
  );
}

export default Home;