import React from "react";

const Article = ({ article }) => {
  const handleClick = () => {
    // Implement logic to show article details (e.g., modal, new page)
    console.log("Article clicked:", article);
  };

  return (
    <li>
      <a href={article.url} onClick={() => handleClick} target="_blank">
        <h3>{article.title}</h3>
        <p>{article.abstract}</p>
        <div className="published_date">{article.published_date}</div>
      </a>
    </li>
  );
};

export default Article;
