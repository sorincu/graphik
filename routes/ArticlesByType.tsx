import React = require('react');
import styles from '../css/ArticlesByType.module.css';

// data
import articles from '../data/articles';

function ArticlesByType(props) {
  return (
    <div className={styles.content}>
      <h1 className={`${styles.header} border-bottom`}>{props.type}</h1>

      <div className={styles.articlesAdvertContainer}>
        <div className={styles.articlesContainer}>
          {articles.map((article) => (
            <div key={article.articleId} className={`${styles.article}`}>
              <img
                src={article.previewImg}
                className={styles.img}
                alt="article image"
              />

              <div className={styles.articleTextDiv}>
                <h2 className={styles.title}>{article.title}</h2>
                <p className={styles.description}>{article.description}</p>
                <div className={styles.authorDateContainer}>
                  <p className={styles.author}>{article.author}</p>
                  <p className={styles.date}>{article.publicationDate}</p>
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

export default ArticlesByType;
