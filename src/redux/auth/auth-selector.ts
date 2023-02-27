import { RootState } from "../store";
export const selectAuth = (state: RootState) => state.auth;
export const selectToken = (state: RootState) => state.auth.token;

