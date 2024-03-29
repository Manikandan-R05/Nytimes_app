import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleDetails from "./ArticleDetails";

const API_KEY = "YOUR_NY_TIMES_API_KEY"; // Replace with your actual API key

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=PbYA24xyseFrrcavsfTNUGBuYvpORMVR`
      );
      setArticles(response.data.results);
    };

    fetchData();
  }, []);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div className="container">
      <h2>Most Popular New York Times Articles</h2>
      <ul className="article_list">
        {articles.map((article) => (
          <li key={article.uri}>
            <a
              href={article.url}
              onClick={() => handleArticleClick(article)}
              target="_blank"
            >
              {article.title}
            </a>
            <div className="published_date">{article.published_date}</div>
          </li>
        ))}
      </ul>
      {selectedArticle && <ArticleDetails article={selectedArticle} />}
    </div>
  );
};

export default ArticleList;
