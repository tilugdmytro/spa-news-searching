import React from "react";
import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import { useSelector, useDispatch } from "react-redux";
import { LinearProgress, Box } from "@mui/material/";
/////// using re-export
// import { articlesOperations, articlesSelectors } from "../redux/articles";

import * as articlesOperations from "../redux/articles/articlesOperations";
import * as articlesSelectors from "../redux/articles/articlesSelectors";

import CardView from "./CardView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomeView() {
  // const [articles, setArticles] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const articles = useSelector(articlesSelectors.getArticles);
  const isLoading = useSelector(articlesSelectors.getIsLoading);
  const error = useSelector(articlesSelectors.getError);

  // const handleLoadMore = () => {
  //   setCurrentPage((prevPage) => prevPage + 1);
  // };

  useEffect(() => {
    dispatch(articlesOperations.fetchArticles());
  }, [dispatch]);

  // useEffect(() => {
  //   async function getArticles() {
  //     const data = await fetchArticles();
  //     setArticles(data);
  //   }
  //   getArticles();
  //   console.log("был fetch для всех ");
  // }, []);

  useEffect(() => {
    if (!query) {
      return;
    }
    dispatch(articlesOperations.fetchArticlesByQuery(query));
  }, [dispatch, query]);

  // useEffect(() => {
  //   if (!query) {
  //     return;
  //   }
  //   async function getArticlesByQuery() {
  //     try {
  //       setIsLoading(true);
  //       const data = await fetchArticleByQuery(query);
  //       setArticles(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   getArticlesByQuery();
  //   console.log("был fetch по запросу ");
  // }, [query]);

  const onChangeQuery = (query) => {
    setQuery(query);
    // setArticles([]);
    // setCurrentPage(1);
    // setError(null);
  };

  // const loadMoreButton = articles.length > 0 && !isLoading;

  return (
    <>
      {/* <Header /> */}
      {error && <h1>ERROR!</h1>}
      <SearchForm onSubmit={onChangeQuery} />
      {isLoading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      <CardView articles={articles} />
      <ToastContainer autoClose={3000} />
      {/* {loadMoreButton && (
        <button type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )} */}
    </>
  );
}
