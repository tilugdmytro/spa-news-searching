import { useState, useEffect } from "react";
import Filter from "./Filter";
import { fetchArticles, fetchArticleByFilter } from "../services/api";
import Card from "./CardView";

export default function HomeView() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticles() {
      const data = await fetchArticles();
      setArticles(data);
    }
    getArticles();
    console.log("был fetch для всех ");
  }, []);

  const submitHandler = (filter) => {
    console.log(filter);
    async function getArticle() {
      const data = await fetchArticleByFilter(filter);
      setArticles(data);
    }
    getArticle();
  };

  // const filteredArticles = articles.filter((article) =>
  //   article.title.includes(filter)
  // );
  // console.log(filteredArticles);

  // const changeFitler = (event) => {
  //   setFilter(event.target.value);
  // };

  return (
    <>
      <Filter onSubmit={submitHandler} />
      <Card articles={articles} />
    </>
  );
}
