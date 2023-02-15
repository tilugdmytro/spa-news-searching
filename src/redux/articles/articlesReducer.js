import { createReducer, combineReducers, createSlice } from "@reduxjs/toolkit";
// import * as articlesActions from "./articlesActions";
import {
  fetchArticles,
  fetchArticleById,
  fetchArticlesByQuery,
} from "./articlesOperations";

const items = createReducer([], {
  // [articlesActions.fetchArticlesSuccess]: (_, action) => action.payload,

  [fetchArticles.fulfilled]: (_, action) => action.payload,
  [fetchArticleById.fulfilled]: (_, action) => action.payload,
  [fetchArticlesByQuery.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  // [articlesActions.fetchArticlesRequest]: () => true,
  // [articlesActions.fetchArticlesSuccess]: () => false,
  // [articlesActions.fetchArticlesError]: () => false,
  [fetchArticles.pending]: () => true,
  [fetchArticles.fulfilled]: () => false,
  [fetchArticles.rejected]: () => false,
});

const error = createReducer(null, {
  // [articlesActions.fetchArticlesError]: (_, action) => action.payload,
  // [articlesActions.fetchArticlesRequest]: () => null,
  [fetchArticles.rejected]: (_, action) => action.payload,
  [fetchArticles.pending]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});

/////////// make slice ////////////

// const articlesSlice = createSlice({
//   name: "articles",
//   initialState: { items: [], isLoading: false, error: null },
//   extraReducers: {
//     [fetchArticles.fulfilled]: (state, action) => {
//       return {
//         ...state,
//         items: action.payload,
//       };
//     },
//     [fetchArticles.pending]: (state) => {
//       return {
//         ...state,
//         isLoading: true,
//       };
//     },
//     [fetchArticles.rejected]: (state, action) => {
//       return {
//         ...state,
//         error: action.payload,
//       };
//     },
//   },
// });

// export default articlesSlice.reducer;
