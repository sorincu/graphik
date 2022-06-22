import React = require('react');
import styles from '../css/Popular.module.css';

// data
import articles from '../data/articles';

function Popular() {
  return (
    <div className={styles.content}>
      <h1 className={`${styles.header} border-bottom`}>Popular</h1>

      {articles.map((article) => (
        <div className={styles.article}>
          <img
            src={article.previewImg}
            className={styles.img}
            alt="article image"
          />

          <div className={styles.articleTextDiv}>
            <p>{article.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Popular;
