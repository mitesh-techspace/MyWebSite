import React from "react";
import articles from "./ArticleContent";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const { name } = useParams();
  const matchingArticle = articles.find((article) => article.name == name);
  return (
    <>
      <h1>{matchingArticle.title}</h1>
      {matchingArticle.content.map((para) => (
        <p>{para}</p>
      ))}
    </>
  );
};

export default ArticlePage;
