import { getNewsThunk, loadMoreNewsThunk } from "./news-thunk";
import { STATUS } from "./../../constants/fetchStatus";
import { createSlice } from "@reduxjs/toolkit";
import { INewsState } from "../interfaces";

const initialState: INewsState = {
  status: STATUS.idle,
  data: null,
  page: 1,
  total_items: 0,
  total_pages: 1,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    loadMore: (state) => {
      if (state.page < state.total_pages) {
        state.page += 1;
      }
    },
    deleteNews: (state, { payload }) => {
      if (state.data) {
        state.data = state.data.filter((item) => item.id !== payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNewsThunk.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(
        getNewsThunk.fulfilled,
        (state, { payload: { data, page, total_items, total_pages } }) => {
          state.data = data;
          state.status = STATUS.success;
          state.page = page;
          state.total_items = total_items;
          state.total_pages = total_pages;
        }
      )
      .addCase(getNewsThunk.rejected, (state) => {
        state.status = STATUS.error;
      })
      .addCase(loadMoreNewsThunk.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(
        loadMoreNewsThunk.fulfilled,
        (state, { payload: { data, page, total_items, total_pages } }) => {
          if (state.data && data) {
            state.data = [...state.data, ...data];
          }
          state.status = STATUS.success;
          state.page = page;
          state.total_items = total_items;
          state.total_pages = total_pages;
        }
      )
      .addCase(loadMoreNewsThunk.rejected, (state) => {
        state.status = STATUS.error;
      });
  },
});

export const { loadMore, deleteNews } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
