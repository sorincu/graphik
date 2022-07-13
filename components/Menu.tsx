import React = require('react');

// styles
import styles from '../css/Menu.module.css';

// data
import categories from '../data/categories.tsx';

export default function Menu(props) {
  return (
    <div>
      {props.showMenu && (
        <div className={styles.menuWrapper}>
          {categories.map((category) => (
            <p>{category.type} </p>
          ))}
        </div>
      )}
    </div>
  );
}
