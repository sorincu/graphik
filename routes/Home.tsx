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
      <PrimaryArticles />
      <Ad />
      <SecondaryArticles />
      <Categories />
      <Footer />
    </div>
  );
}

export default Home;
