import React from "react";

const ArticleDetails = ({ article }) => {
  return (
    <div>
      <p>{article.abstract}</p>
      <a href={article.url} target="_blank">
        Read More &gt;&gt;
      </a>
    </div>
  );
};

export default ArticleDetails;
