import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Navbar.module.css';

function Navbar(props) {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <div className={styles.navbarLinks}>
          <p
            onClick={() => {
              if (!props.showMenu) {
                props.openMenu();
              } else {
                props.closeMenu();
              }
            }}
            className={styles.btn}
          >
            Menu
          </p>
          <p className={styles.btn}>Search</p>
          <Link to="/popular">
            <p className={styles.btn}>Popular</p>
          </Link>
          <Link to="/latest">
            <p className={styles.btn}>Latest</p>
          </Link>
        </div>

        <Link to="/">
          <h2 className={styles.logo}>graphik</h2>
        </Link>

        <Link to="/">
          <p className={styles.btn}>Subscribe</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
