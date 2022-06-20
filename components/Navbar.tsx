import React = require('react');
import { Link } from 'react-router-dom';
import styles from '../css/Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <div className={styles.navbarLinks}>
          <p>Menu</p>
          <p>Search</p>
          <Link to="/popular">Popular</Link>
          <Link to="/latest">Latest</Link>
        </div>

        <Link to="/">
          <h2 className={styles.logo}>graphik</h2>
        </Link>

        <button className={styles.subscribeBtn}>Subscribe</button>
      </div>
    </div>
  );
}

export default Navbar;
