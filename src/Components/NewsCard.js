// src/NewsCard.js
import React from 'react';
import './NewsCard.css';

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="news-card__image" />
      )}
      <div className="news-card__content">
        <h2 className="news-card__title">{article.title}</h2>
        <p className="news-card__description">{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-card__button">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
