// src/NewsList.js
import React, { useEffect, useState } from 'react';
import { fetchTopHeadlines } from './newsService';
import NewsCard from './NewsCard';
import './NewsList.css';

const NewsList = ({ category, searchTerm }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchTopHeadlines(category, searchTerm);
        setArticles(data);
      } catch (err) {
        setError('Failed to fetch news.');
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, [category, searchTerm]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="news-list">
      {articles.length === 0 ? (
        <p>No news articles found.</p>
      ) : (
        <div className="news-list__container">
          {articles.map((article) => (
            <NewsCard key={article.url} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsList;
