import storage from "redux-persist/lib/storage";
import { signInThunk } from "./auth-thunk";
import { STATUS } from "./../../constants/fetchStatus";
import { createSlice } from "@reduxjs/toolkit";
import { IAuth } from "../interfaces";
import persistReducer from "redux-persist/es/persistReducer";

const initialState: IAuth = {
  status: STATUS.idle,
  token: null,
  tokenType: null,
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInThunk.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.token = payload.access_token;
        state.tokenType = payload.token_type;
        state.errorMessage = null;
      })
      .addCase(signInThunk.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        if (typeof payload === "string") {
          state.errorMessage = payload;
        }
      })
  },
});

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token", "tokenType"],
};

export const { logout } = authSlice.actions;
export const authReducer = persistReducer(persistConfig, authSlice.reducer);
