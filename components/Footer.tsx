import React = require('react');
import styles from '../css/Footer.module.css';

function Footer() {
  return (
    <div className={styles.footerWrapper}>
        <div className={`${styles.content} border-bottom`}>
        <div className={styles.footerSection}>
          <h1 className={styles.footerSectionHeader}>About</h1>

          <p>Our History</p>
          <p>Categories</p>
        </div>

        <div className={styles.footerSection}>
          <h1 className={styles.footerSectionHeader}>Contact</h1>

          <p>Our History</p>
          <p>Categories</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
