import React = require('react');
import styles from '../css/SecondaryArticles.module.css';

// modules
import SmallArticle from './SmallArticle';
import MediumArticle from './MediumArticle';
import LargeArticle from './LargeArticle';
import DoubleColumnArticle from './DoubleColumnArticle';

function SecondaryArticles() {
  return (
    <div className={`${styles.content}`}>
      <div className={`${styles.row} border-bottom`}>
        <MediumArticle
          feature="border-right medium-width"
          imgWidth="medium-width"
          withContent={true}
        />
        <MediumArticle
          feature="border-right medium-width"
          imgWidth="medium-width"
          withContent={true}
        />
        <MediumArticle
          feature="border-right medium-width"
          imgWidth="medium-width"
          withContent={true}
        />
        <MediumArticle imgWidth="medium-width" withContent={true} />
      </div>

      <div className={`${styles.row} border-bottom`}>
        <DoubleColumnArticle feature="border-right dbl-width" />

        <div className="border-right">
          <SmallArticle feature="border-bottom medium-width" />
          <SmallArticle feature="medium-width" />
        </div>

        <div className="">
          <SmallArticle feature="border-bottom medium-width" />
          <SmallArticle feature="medium-width" />
        </div>
      </div>
    </div>
  );
}

export default SecondaryArticles;
