import React from "react";
import articles from "./ArticleContent";
import { Link } from "react-router-dom";

const ArticleListPage = () => (
  <>
    <h1>Articles</h1>
    {articles.map((article) => (
      <Link
        to={`/article/${article.name}`}
        className="article-list-item"
        key={article.name}
      >
        <h3>{article.title}</h3>
        <p>{article.content[0].substr(0, 150)}...</p>
      </Link>
    ))}
  </>
);

export default ArticleListPage;
