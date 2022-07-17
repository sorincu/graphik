import React = require('react');
import { Link } from 'react-router-dom';

// styles
import styles from '../css/Menu.module.css';

// data
import categories from '../data/categories.tsx';

export default function Menu(props) {
  return (
    <div>
      {props.showMenu && (
        <div className={styles.menuWrapper}>
          <div className={styles.menu}>
            <div className={styles.categories}>
              {categories.map((category) => (
                <Link
                  to={`/${category.type}`}
                  className={`btn ${styles.category}`}
                >
                  {category.type}{' '}
                </Link>
              ))}
            </div>

            <div className={styles.dictionary}>
              <p className={styles.randomWordBtn}>Get a random word</p>
            </div>

            <div>The</div>
          </div>
        </div>
      )}
    </div>
  );
}
