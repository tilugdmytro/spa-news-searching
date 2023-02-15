import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { fetchArticleById } from "../services/api";
import { useSelector, useDispatch } from "react-redux";
/////// using re-export
import { articlesOperations, articlesSelectors } from "../redux/articles";

export default function ArticleView() {
  const { articleId } = useParams();
  // const [article, setArticle] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const article = useSelector(articlesSelectors.getArticles);

  // useEffect(() => {
  //   async function getArticleById() {
  //     const data = await fetchArticleById(articleId);
  //     setArticle(data);
  //   }
  //   getArticleById();
  //   console.log("был fetch для одной ");
  // }, [articleId]);

  useEffect(() => {
    dispatch(articlesOperations.fetchArticleById(articleId));
  }, [articleId, dispatch]);

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
