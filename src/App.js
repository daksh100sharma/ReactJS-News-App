import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navBar';
import Card from './components/card';
import axios from 'axios';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';

const NEWS_API_KEY = '2b69528fbf99441788c31428f135c2dc';

const fetchNews = async (category) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${NEWS_API_KEY}`);
    const articles = response.data.articles.map(article => ({
      title: article.title,
      description: article.description,
      urlToImg: article.urlToImage,
      url: article.url
    }));
    return articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

function NewsCategory() {
  const { category } = useParams('general');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const newsArticles = await fetchNews(category);
      setArticles(newsArticles);
    };
    getArticles();
  }, [category]);

  return (
    <div className="h-screen flex justify-center items-start pt-10">
      <div className="custom-height min-w-[96%] max-w-screen-xl border-4 border-spacing-5 border-dashed border-slate-300 rounded-lg grid gap-5 p-5 
                      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {articles.map((article, index) => (
          <Card
            key={index}
            title={article.title}
            description={article.description}
            urlToImg={article.urlToImg || 'https://www.niijiiradio.com/wp-content/uploads/2016/10/News-Image-3.jpg'}
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/general" replace />} />
        <Route path="/:category" element={<NewsCategory />} />
      </Routes>
    </div>
  );
}

export default App;
