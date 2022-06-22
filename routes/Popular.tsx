import React = require('react');
import styles from '../css/Popular.module.css';

// data
import articles from '../data/articles';

function Popular() {
  return (
    <div className={styles.content}>
      <h1 className={`${styles.header} border-bottom`}>Popular</h1>

      <div className={styles.articlesAdvertContainer}>
        <div className={styles.articlesContainer}>
          {articles.map((article) => (
            <div className={`${styles.article}`}>
              <img
                src={article.previewImg}
                className={styles.img}
                alt="article image"
              />

              <div className={styles.articleTextDiv}>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <div className={styles.authorDateDiv}>
                  <p>{article.author}</p>
                  <p>{article.publicationDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ad}>
          <h1>ADVERTISEMENT</h1>
        </div>
      </div>
    </div>
  );
}

export default Popular;
