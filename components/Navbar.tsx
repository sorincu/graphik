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
            className="icon-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-5 -7 24 24"
              width="32"
              fill="currentColor"
            >
              <path d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"></path>
            </svg>
          </p>
          <p className="icon-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2.5 -2.5 24 24"
              width="25"
              fill="currentColor"
            >
              <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"></path>
            </svg>
          </p>
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
