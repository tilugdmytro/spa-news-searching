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
