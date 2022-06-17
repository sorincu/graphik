import React = require('react');
import styles from '../css/Categories.module.css';

// data
import categories from '../data/categories';
import articles from '../data/articles';

// modules
import Category from './Category';

function Categories() {
  return (
    <div className={styles.content}>
      {categories.map((category) => (
        <div className={styles.categoryContainer}>
          <Category type={category.type} />

          {articles.map((article) => (
            <p className={`${styles.articleTitle}`}>{article.title}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Categories;
