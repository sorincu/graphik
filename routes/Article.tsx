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
      <div className={styles.titleDescriptionContainer}>
        <p className={styles.category}>{article.category}</p>
        {/* <p className={styles.date}>{article.publicationDate}</p> */}

        <h2 className={styles.title}>{article.title}</h2>
        <p className={styles.description}>{article.description}</p>
      </div>

      <img className={styles.img} src={article.previewImg} />

      <div className={styles.content}>
        {article.content.map((paragraph) => (
          <div className={styles.paragraph}>{paragraph}</div>
        ))}
      </div>
    </div>
  );
}

export default Article;
