import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/navBar';
import Card from './components/card';
import axios from 'axios';

/************************************/
/************************************/
const NEWS_API_KEY = 'YOUR NEWS API KEY'; // GET YOUR API KEY FROM https://newsapi.org/register
/************************************/
/************************************/

const fetchNews = async () => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NEWS_API_KEY}`);
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

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipText, setTooltipText] = useState('');
  const [articles, setArticles] = useState([]);
  const titleRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });

    if (titleRef.current) {
      setTooltipText(titleRef.current.textContent);
    }
  };

  useEffect(() => {
    const getArticles = async () => {
      const newsArticles = await fetchNews();
      setArticles(newsArticles);
    };

    getArticles();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="h-screen flex justify-center items-start pt-10">
        <div
          className="custom-height min-w-[96%] max-w-screen-xl border-4 border-spacing-5 border-dashed border-slate-300 rounded-lg grid grid-cols-[repeat(4,1fr)] gap-5 p-5"
          onMouseMove={handleMouseMove}
        >

          {articles.map((article, index) => (
            article.title !== '[Removed]' && (
              <Card
                key={index}
                title={article.title}
                description={article.description}
                urlToImg={article.urlToImg || 'https://www.niijiiradio.com/wp-content/uploads/2016/10/News-Image-3.jpg'}
                url={article.url}
              />
            )
          ))}

          {isHovered && tooltipText && (
            <div
              className="absolute text-sm text-gray-700 p-1 bg-white border border-gray-300 rounded-md shadow-lg"
              style={{
                top: mousePosition.y + 50,
                left: mousePosition.x + 20,
                pointerEvents: 'none',
                zIndex: 1000,
              }}
            >
              {tooltipText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
