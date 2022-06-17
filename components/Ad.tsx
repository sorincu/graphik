import React = require('react');
import styles from '../css/Ad.module.css';

function Ad() {
  return (
    <div className={`${styles.content} border-bottom`}>
      <p className={styles.adLabel}>Advertisement</p>

      <div className={styles.adContainer}>Advertisement</div>
    </div>
  );
}

export default Ad;
