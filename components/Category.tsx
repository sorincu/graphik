import React = require('react');
import styles from '../css/Category.module.css';

function Category(props) {
  return (
    <div>
      <h1 className={`${styles.typeHeader} border-bottom`}>{props.type}</h1>
    </div>
  );
}

export default Category;
