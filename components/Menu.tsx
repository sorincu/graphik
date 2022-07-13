import React = require('react');
import { useEffect, useRef } from 'react';

// styles
import styles from '../css/Menu.module.css';

export default function Menu(props) {


  return (
    <div>
      {props.showMenu && (
        <div className={styles.menuWrapper}>
          <h1>Hello</h1>
          <h2>World</h2>
        </div>
      )}
    </div>
  );
}
