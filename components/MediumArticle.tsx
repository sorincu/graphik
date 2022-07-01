import React = require('react');
import styles from '../css/MediumArticle.module.css';

import { Link } from 'react-router-dom';

// data
import articles from '../data/articles';

function MediumArticle(props) {
  return (
    <Link to={`/articles/${props.articleId}`}>
      <div className={`${props.feature} ${styles.article}`}>
        <img className={props.imgWidth} src={articles[0].previewImg} />

        <div className={styles.categoryDateContainer}>
          <p className={styles.category}>{articles[0].category}</p>
          <p className={styles.date}>{articles[0].publicationDate}</p>
        </div>

        <h2 className={styles.title}>{articles[0].title}</h2>

        {props.withContent && (
          <p className={styles.description}>{articles[0].description}</p>
        )}

        <p className={styles.author}>{articles[0].author}</p>
      </div>
    </Link>
  );
}

export default MediumArticle;
