import { refreshUserThunk } from "./../auth/auth-thunk";
import { IUser } from "./../../interfaces/auth";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IUser = {
  id: "",
  first_name: "",
  last_name: "",
  created_at: "",
  avatar: "",
  bio: "",
  email: "",
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(refreshUserThunk.fulfilled, (_, { payload }) => payload);
  },
});

export const userReducer = userSlice.reducer;
