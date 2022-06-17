import React = require('react');
import styles from '../css/Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <div className={styles.navbarLinks}>
          <p>Popular</p>
          <p>Latest</p>
        </div>

        <h2 className={styles.logo}>graphik</h2>

        <button className={styles.subscribeBtn}>Subscribe</button>
      </div>
    </div>
  );
}

export default Navbar;
