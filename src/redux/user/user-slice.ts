import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../constants/fetchStatus";
import { IAuth } from "../interfaces";

const initialState = {
  status: STATUS.idle,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const userReducer = userSlice.reducer;
