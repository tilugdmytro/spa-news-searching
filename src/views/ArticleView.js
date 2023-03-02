import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { fetchArticleById } from "../services/api";
import { useSelector, useDispatch } from "react-redux";
/////// using re-export
// import { articlesOperations, articlesSelectors } from "../redux/articles";

import * as articlesOperations from "../redux/articles/articlesOperations";
import * as articlesSelectors from "../redux/articles/articlesSelectors";

import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ArticleView() {
  // const [article, setArticle] = useState(null);
  const { articleId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const article = useSelector(articlesSelectors.getArticles);

  useEffect(() => {
    dispatch(articlesOperations.fetchArticleById(articleId));
  }, [articleId, dispatch]);

  // useEffect(() => {
  //   async function getArticleById() {
  //     const data = await fetchArticleById(articleId);
  //     setArticle(data);
  //   }
  //   getArticleById();
  //   console.log("был fetch для одной ");
  // }, [articleId]);

  const onGoBack = () => {
    navigate(`/spaceflight-news-spa`);
  };

  return (
    <>
      {article && (
        <>
          <img width="200" src={article.imageUrl} alt={article.title} />
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
          <Button
            color="inherit"
            startIcon={<ArrowBackIcon />}
            sx={{ textTransform: "none", fontWeight: 700 }}
            onClick={onGoBack}
          >
            Back to homepage
          </Button>
        </>
      )}
    </>
  );
}
