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
            className="btn"
          >
            Menu
          </p>
          <p className="btn">Search</p>
          <Link to="/popular">
            <p className="btn">Popular</p>
          </Link>
          <Link to="/latest">
            <p className="btn">Latest</p>
          </Link>
        </div>

        <Link to="/">
          <h2 className={styles.logo}>graphik</h2>
        </Link>

        <Link to="/">
          <p className="btn">Subscribe</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
