import { RootState } from "../store";

export const selectNews = (state: RootState) => state.news.data;
export const selectNewsStatus = (state: RootState) => state.news.status;
export const selectRenderLoadMore = (state: RootState) => {
  return state.news.page < state.news.total_pages;
};
export const selectNewsPage = (state: RootState) => state.news.page;
