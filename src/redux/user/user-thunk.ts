import { toast } from "react-toastify";
import { refreshUserService } from "./../../services/auth-services";
import { accessToken } from "./../../http/http";
import { AppDispatch, RootState } from "./../store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserData } from "../interfaces";

export const refreshUserThunk = createAsyncThunk<
  IUserData,
  void,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("auth/refreshUser", async (_, { rejectWithValue, getState }) => {
  try {
    const { token, tokenType } = getState().auth;
    if (token && tokenType) {
      accessToken.set({ token_type: tokenType, access_token: token });
    }
    const data = await refreshUserService();
    toast.success(`Вітаємо ${data.first_name}`);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Ooops... Something went wrong");
  }
});
