import {
  ISignInCredentials,
  ISignUpCredentials,
} from "./../../interfaces/auth";
import { signInService, signUpService } from "./../../services/auth-services";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { omit } from "lodash";
export const signUpThunk = createAsyncThunk(
  "auth/signUp",
  async (credentials: ISignUpCredentials, { rejectWithValue, dispatch }) => {
    try {
      await signUpService(credentials);
      dispatch(signInThunk(omit(credentials, ["first_name", "last_name"])));
    } catch {
      return rejectWithValue("Oooops");
    }
  }
);

export const signInThunk = createAsyncThunk(
  "auth/signUp",
  async (credentials: ISignInCredentials, { rejectWithValue }) => {
    try {
      const data = await signInService(credentials);
      return data;
    } catch {
      return rejectWithValue("Oooops");
    }
  }
);
