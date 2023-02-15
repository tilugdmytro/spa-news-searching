import * as articlesActions from "./articlesActions";
import * as articlesAPI from "../../services/api";

export const fetchArticles = () => async (dispatch) => {
  dispatch(articlesActions.fetchArticlesRequest());
  try {
    const articles = await articlesAPI.fetchArticles();
    dispatch(articlesActions.fetchArticlesSuccess(articles));
  } catch (error) {
    dispatch(articlesActions.fetchArticlesError(error));
  }
};

export const fetchArticleById = (articleId) => async (dispatch) => {
  dispatch(articlesActions.fetchArticlesRequest());
  try {
    const article = await articlesAPI.fetchArticleById(articleId);
    dispatch(articlesActions.fetchArticlesSuccess(article));
  } catch (error) {
    dispatch(articlesActions.fetchArticlesError(error));
  }
};

export const fetchArticlesByQuery = (query) => async (dispatch) => {
  dispatch(articlesActions.fetchArticlesRequest());
  try {
    const articles = await articlesAPI.fetchArticlesByQuery(query);
    dispatch(articlesActions.fetchArticlesSuccess(articles));
  } catch (error) {
    dispatch(articlesActions.fetchArticlesError(error));
  }
};
