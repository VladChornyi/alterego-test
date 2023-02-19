import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsService } from "../../services/news-service";

export const getNewsThunk = createAsyncThunk(
  "news/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const result = await getNewsService();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
