import React = require('react');
import { useParams } from 'react-router-dom';
import styles from '../css/Article.module.css';

// data
import articles from '../data/articles';

function Article() {
  const { articleId } = useParams();
  const article = articles.find((a) => a.articleId === parseInt(articleId));

  return (
    <div className={`${styles.article}`}>
      <h2 className={styles.title}>{article.title}</h2>

      <div className={styles.categoryDateContainer}>
        <p className={styles.category}>{article.category}</p>
        <p className={styles.date}>{article.publicationDate}</p>
      </div>

      <img className={styles.img} src={article.previewImg} />

      <p className={styles.description}>{article.description}</p>

      <p className={styles.author}>{article.author}</p>
    </div>
  );
}

export default Article;
