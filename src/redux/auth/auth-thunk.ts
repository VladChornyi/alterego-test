import { AppDispatch, RootState } from "./../store";
import { accessToken } from "./../../http/http";
import { ISignInCredentials } from "./../../interfaces/auth";
import { signInService } from "./../../services/auth-services";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginResponse } from "../interfaces";
import { refreshUserThunk } from "../user/user-thunk";

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
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Ooops... Something went wrong");
  }
});
