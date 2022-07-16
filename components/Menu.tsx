import React = require('react');

// styles
import styles from '../css/Menu.module.css';

// data
import categories from '../data/categories.tsx';

// modules
import Category from './Category';

export default function Menu(props) {
  return (
    <div>
      {props.showMenu && (
        <div className={styles.menuWrapper}>
          <div className={styles.menu}>
            <div className={styles.categories}>
              {categories.map((category) => (
                <p className={`btn ${styles.category}`}>{category.type} </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
