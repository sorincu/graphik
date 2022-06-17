import React = require('react');
import styles from '../css/SmallArticle.module.css';

// data
import articles from '../data/articles';

function SmallArticle(props) {
  return (
    <div className={`${props.feature} ${styles.article}`}>
      <div className={styles.titleAuthorContainer}>
        <h2 className={styles.title}>{articles[0].title}</h2>
        <p className={styles.author}>{articles[0].author}</p>
      </div>

      <img
        className={`${props.imgWidth} ${styles.img}`}
        src={articles[0].previewImg}
      />
    </div>
  );
}

export default SmallArticle;
