import { useState, useEffect } from "react";
import FilterSearchForm from "./FilterSearchForm";
import { fetchArticles, fetchArticleByQuery } from "../services/api";
import Card from "./CardView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

export default function HomeView() {
  const [articles, setArticles] = useState([]);
  // console.log(articles);
  const [query, setQuery] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const handleLoadMore = () => {
  //   setCurrentPage((prevPage) => prevPage + 1);
  // };

  useEffect(() => {
    async function getArticles() {
      const data = await fetchArticles();
      setArticles(data);
    }
    getArticles();
    console.log("был fetch для всех ");
  }, []);

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getArticlesByQuery() {
      try {
        setIsLoading(true);
        const data = await fetchArticleByQuery(query);
        setArticles(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getArticlesByQuery();
    console.log("был fetch по запросу ");
  }, [query]);

  const onChangeQuery = (query) => {
    setQuery(query);
    setArticles([]);
    // setCurrentPage(1);
    setError(null);
  };

  // const loadMoreButton = articles.length > 0 && !isLoading;

  return (
    <>
      {error && <h1>ERROR!</h1>}
      <FilterSearchForm onSubmit={onChangeQuery} />
      {isLoading && <p>LOADING</p>}
      <Card articles={articles} />
      <ToastContainer autoClose={3000} />
      {/* {loadMoreButton && (
        <button type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )} */}
    </>
  );
}
