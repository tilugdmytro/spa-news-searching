import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as articlesActions from "./articlesActions";

const items = createReducer([], {
  [articlesActions.fetchArticlesSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [articlesActions.fetchArticlesRequest]: () => true,
  [articlesActions.fetchArticlesSuccess]: () => false,
  [articlesActions.fetchArticlesError]: () => false,
});

const error = createReducer(null, {
  [articlesActions.fetchArticlesError]: (_, action) => action.payload,
  [articlesActions.fetchArticlesRequest]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
