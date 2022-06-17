import React = require('react');
import styles from '../css/PrimaryArticles.module.css';

// modules
import MediumArticle from './MediumArticle';
import LargeArticle from './LargeArticle';
import SmallArticle from './SmallArticle';

function PrimaryArticles() {
  return (
    <div className={`${styles.content}`}>
      <div className={`${styles.primaryArticles} border-bottom`}>
        <div className={styles.leftContainer}>
          <MediumArticle feature="border-bottom" imgWidth="std-width" /> 
          <MediumArticle feature="" imgWidth="std-width" />
        </div>

        <div className={styles.middleContainer}>
          <LargeArticle feature="border-sides" imgWidth="dbl-width" />
        </div>

        <div className={styles.rightContainer}>
          <SmallArticle feature="border-bottom" imgWidth="std-width" />
          <SmallArticle feature="border-bottom" imgWidth="std-width" />
          <SmallArticle feature="border-bottom" imgWidth="std-width" />
          <SmallArticle feature="" imgWidth="std-width" />
        </div>
      </div>
    </div>
  );
}

export default PrimaryArticles;
