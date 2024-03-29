import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleDetails from "./ArticleDetails";
const API_KEY = "PbYA24xyseFrrcavsfTNUGBuYvpORMVR"; // Replace with your actual API key
let Page_NO = "7";
const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("7");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/${Page_NO}.json?api-key=${API_KEY}`
      );
      setArticles(response.data.results);
    };

    fetchData();
  }, [selectedFilter]);
  const handleButtonClick = (pageno) => {
    Page_NO = pageno;
    setSelectedFilter(Page_NO); // Update selectedFilter state
  };
  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div className="bg_container">
      <div className="container">
        <h2 datatest-id="cp-title">Most Popular New York Times Articles</h2>
        <div className="button_wrapper">
          <button
            className={selectedFilter == "1" && "selected"}
            onClick={() => handleButtonClick(1)}
          >
            1
          </button>
          <button
            className={selectedFilter == "7" && "selected"}
            onClick={() => handleButtonClick(7)}
          >
            7
          </button>
          <button
            className={selectedFilter == "30" && "selected"}
            onClick={() => handleButtonClick(30)}
          >
            30
          </button>
        </div>
        <ul className="article_list">
          {articles.map((article) => (
            <li
              datatest-id={`key-${article.uri} `}
              key={article.uri}
              onClick={() => handleArticleClick(article)}
            >
              <h3 datatest-id="cp-articletitle"> {article.title}</h3>

              {selectedArticle && (
                <div
                  className={
                    selectedArticle.uri === article.uri && "article_details"
                  }
                >
                  {selectedArticle.uri === article.uri && (
                    <ArticleDetails article={selectedArticle} />
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArticleList;
