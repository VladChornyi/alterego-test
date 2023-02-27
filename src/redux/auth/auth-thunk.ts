import { AppDispatch, RootState } from "./../store";
import { accessToken } from "./../../http/http";
import { toast } from "react-toastify";
import { ISignInCredentials } from "./../../interfaces/auth";
import {
  signInService,
  refreshUserService,
} from "./../../services/auth-services";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginResponse, IUserData } from "../interfaces";

export const signInThunk = createAsyncThunk<
  ILoginResponse,
  ISignInCredentials,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("auth/signIn", async (credentials, { rejectWithValue, dispatch }) => {
  try {
    const { token_type, access_token } = await signInService(credentials);
    accessToken.set({
      token_type,
      access_token,
    });
    dispatch(refreshUserThunk());
    return { token_type, access_token };
  } catch (error) {
    toast.error("Ім'я користувача або пароль введено неправильно.");
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Ooops... Something went wrong");
  }
});

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
