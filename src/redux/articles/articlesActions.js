import { createAction } from "@reduxjs/toolkit";

export const fetchArticlesRequest = createAction(
  "articles/fetchArticlesRequest"
);

export const fetchArticlesSuccess = createAction(
  "articles/fetchArticlesSuccess"
);

export const fetchArticlesError = createAction("articles/fetchArticlesError");
