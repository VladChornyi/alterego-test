import { newsReducer } from "./news/news-slice";
import { userReducer } from "./user/user-slice";
import { authReducer } from "./auth/auth-slice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  news: newsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
