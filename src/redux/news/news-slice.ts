import { getNewsThunk } from "./news-thunk";
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
  reducers: {},
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
      );
  },
});

export const newsReducer = newsSlice.reducer;
