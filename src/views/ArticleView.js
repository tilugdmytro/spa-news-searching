import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchArticleById } from "../services/api";

export default function ArticleView() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getArticleById() {
      const data = await fetchArticleById(articleId);
      setArticle(data);
    }
    getArticleById();
    console.log("был fetch для одной ");
  }, [articleId]);

  const onGoBack = () => {
    navigate(`/`);
  };

  return (
    <>
      {article && (
        <>
          <img width="200" src={article.imageUrl} alt={article.title} />
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
          <button type="button" onClick={onGoBack}>
            Back to homepage
          </button>
        </>
      )}
    </>
  );
}
