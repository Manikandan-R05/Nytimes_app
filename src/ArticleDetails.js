import React from "react";

const ArticleDetails = ({ article }) => {
  return (
    <div>
      {/*  <h2>{article.title}</h2> */}
      <p>{article.abstract}</p>
      <a href={article.url} target="_blank">
        Read More &gt;&gt;
      </a>
    </div>
  );
};

export default ArticleDetails;
