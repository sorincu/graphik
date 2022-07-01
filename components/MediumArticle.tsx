import React = require('react');
import styles from '../css/MediumArticle.module.css';
import { Link } from 'react-router-dom';

// data
import articles from '../data/articles';

// Typescript

function MediumArticle(props) {
  const articleId = props.articleId;
  const article = articles.find((a) => a.articleId == parseInt(articleId));

  return (
    <Link to={`/articles/${props.articleId}`}>
      <div className={`${props.feature} ${styles.article}`}>
        <img className={props.imgWidth} src={article.previewImg} />

        <div className={styles.categoryDateContainer}>
          <p className={styles.category}>{article.category}</p>
          <p className={styles.date}>{article.publicationDate}</p>
        </div>

        <h2 className={styles.title}>{article.title}</h2>

        {props.withContent && (
          <p className={styles.description}>{article.description}</p>
        )}

        <p className={styles.author}>{article.author}</p>
      </div>
    </Link>
  );
}

export default MediumArticle;
