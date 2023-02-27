import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsService } from "../../services/news-service";

export const getNewsThunk = createAsyncThunk(
  "news/getNews",
  async (_, { rejectWithValue }) => {
    try {
      const result = await getNewsService();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loadMoreNewsThunk = createAsyncThunk(
  "news/loadMore",
  async (page: number, { rejectWithValue }) => {
    try {
      const result = await getNewsService({ page });
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
