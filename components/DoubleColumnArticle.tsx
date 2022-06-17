import React = require('react');
import styles from '../css/DoubleColumnArticle.module.css';

// data
import articles from '../data/articles';

function DoubleColumnArticle(props) {
  return (
    <div className={`${props.feature} ${styles.article}`}>
      <div className={`${styles.leftContainer}`}>
        <h2 className={styles.title}>{articles[0].title}</h2>

        <p className={styles.description}>{articles[0].description}</p>

        <p className={styles.author}>{articles[0].author}</p>
      </div>

      <div className={styles.rightContainer}>
        <img className={styles.img} src={articles[0].previewImg} />

        <div className={styles.categoryDateContainer}>
          <p className={styles.category}>{articles[0].category}</p>
          <p className={styles.date}>{articles[0].publicationDate}</p>
        </div>
      </div>
    </div>
  );
}

export default DoubleColumnArticle;
