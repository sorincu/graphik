import React = require('react');
import { useParams } from 'react-router-dom';

// data
import articles from '../data/articles';

function Article() {
  const { articleId } = useParams();
  const article = articles.find((a) => a.articleId === parseInt(articleId));

  return <div>{article.title}</div>;
}

export default Article;
