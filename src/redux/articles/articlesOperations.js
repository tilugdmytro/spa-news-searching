import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as articlesActions from "./articlesActions";
import * as articlesAPI from "../../services/api";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (_, { rejectWithValue }) => {
    try {
      const articles = await articlesAPI.fetchArticles();
      return articles;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchArticleById = createAsyncThunk(
  "articles/fetchArticleById",
  async (articleId, { rejectWithValue }) => {
    try {
      const article = await articlesAPI.fetchArticleById(articleId);
      return article;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchArticlesByQuery = createAsyncThunk(
  "articles/fetchArticlesByQuery",
  async (query, { rejectWithValue }) => {
    try {
      const articles = await articlesAPI.fetchArticlesByQuery(query);
      return articles;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const fetchArticles = () => async (dispatch) => {
//   dispatch(articlesActions.fetchArticlesRequest());
//   try {
//     const articles = await articlesAPI.fetchArticles();
//     dispatch(articlesActions.fetchArticlesSuccess(articles));
//   } catch (error) {
//     dispatch(articlesActions.fetchArticlesError(error));
//   }
// };

// export const fetchArticleById = (articleId) => async (dispatch) => {
//   dispatch(articlesActions.fetchArticlesRequest());
//   try {
//     const article = await articlesAPI.fetchArticleById(articleId);
//     dispatch(articlesActions.fetchArticlesSuccess(article));
//   } catch (error) {
//     dispatch(articlesActions.fetchArticlesError(error));
//   }
// };

// export const fetchArticlesByQuery = (query) => async (dispatch) => {
//   dispatch(articlesActions.fetchArticlesRequest());
//   try {
//     const articles = await articlesAPI.fetchArticlesByQuery(query);
//     dispatch(articlesActions.fetchArticlesSuccess(articles));
//   } catch (error) {
//     dispatch(articlesActions.fetchArticlesError(error));
//   }
// };
