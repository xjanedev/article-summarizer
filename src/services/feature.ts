import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Article {
  url: string;
  summary: string;
}

export interface ArticleState {
  articles: Article[];
}

const initialState: ArticleState = {
  articles: JSON.parse(localStorage.getItem("articles") || "[]"),
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addArticle: (state, action: PayloadAction<Article>) => {
      state.articles.unshift(action.payload);
      localStorage.setItem("articles", JSON.stringify(state.articles));
    },
    removeArticle: (state, action: PayloadAction<number>) => {
      state.articles.splice(action.payload, 1);
      localStorage.setItem("articles", JSON.stringify(state.articles));
    },
    clearArticles: state => {
      state.articles = [];
      localStorage.setItem("articles", JSON.stringify(state.articles));
    },
  },
});

export const { addArticle, removeArticle, clearArticles } =
  articleSlice.actions;

export default articleSlice.reducer;
