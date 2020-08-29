import React from "react";

export const NewsComponent = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <div className="card">
          <img src={article.urlToImage} style={{ width: "100%" }} />
          <div className="container">
            <h4 key={article.source.id}>{article.title}</h4>
            <p style={{ fontSize: "14px" }}>{article.description}</p>
            <p
              style={{
                float: "right",
                fontSize: "12px",
                fontStyle: "-moz-initial",
              }}
            >
              {new Date(article.publishedAt).toDateString("dd-mm-yyyy")}
            </p>
            <p
              style={{
                float: "left",
                fontSize: "12px",
                fontStyle: "-moz-initial",
                color: "Highlight",
              }}
            >
              <b>{article.source.name}</b>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
