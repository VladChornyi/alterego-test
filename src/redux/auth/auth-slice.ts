import { STATUS } from "./../../constants/fetchStatus";
import { createSlice } from "@reduxjs/toolkit";
import { IAuth } from "../interfaces";

const initialState: IAuth = {
  status: STATUS.idle,
  token: null,
  tokenType: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const authReducer = authSlice.reducer;

// const slice = createSlice({
//   name: "test",
//   initialState: 0,
//   reducers: {
//     increment: (state, action: PayloadAction<number>) => state + action.payload,
//   },
// });
