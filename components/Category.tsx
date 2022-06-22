import React = require('react');
import { Link } from 'react-router-dom';
import styles from '../css/Category.module.css';

function Category(props) {
  return (
    <div>
      <Link to={`/${props.type}`}>
        <h1 className={`${styles.typeHeader} border-bottom`}>{props.type}</h1>
      </Link>
    </div>
  );
}

export default Category;
