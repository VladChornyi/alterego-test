import { toast } from "react-toastify";
import { ISignInCredentials } from "./../../interfaces/auth";
import { signInService } from "./../../services/auth-services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signInThunk = createAsyncThunk(
  "auth/signIn",
  async (credentials: ISignInCredentials, { rejectWithValue }) => {
    toast.error("Ім'я користувача або пароль введено неправильно.");
    try {
      const data = await signInService(credentials);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      toast.error("Ім'я користувача або пароль введено неправильно.");
      return rejectWithValue("Ooops... Something went wrong");
    }
  }
);
