// src/newsService.js
import axios from 'axios';

const API_KEY = '08bfbacf36e44531a7b4bf83f6410933'; // Replace with your NewsAPI key
const BASE_URL = 'https://newsapi.org/v2';

export const fetchTopHeadlines = async (category = 'general', searchTerm = '') => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        apiKey: API_KEY,
        country: 'us',
        category: category,
        q: searchTerm,
        pageSize: 12, // Fetch more articles for better display
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
