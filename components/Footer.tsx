import React = require('react');
import styles from '../css/Footer.module.css';

// routes
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.footer} border-bottom`}>
        <div className={styles.section}>
          <h1 className={styles.sectionHeader}>About</h1>

          <p>Our History</p>
          <p>Categories</p>
        </div>

        <div className={styles.section}>
          <h1 className={styles.sectionHeader}>Contact</h1>

          <p>Our History</p>
          <p>Categories</p>
        </div>
      </div>

      <div className={styles.copyrightBar}>
        <div className={styles.policies}>
          <p>Privacy Policy</p>
          <p>Advertising Guidelines</p>
          <p>Terms &amp; Conditions</p>
          <p>Site Map</p>
          <p>
            graphik.com Copyright (c) 2022 by graphik Group. All Rights
            Reserved.
          </p>
        </div>

        <Link to="/">
          <h2 className={styles.logo}>graphik</h2>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
