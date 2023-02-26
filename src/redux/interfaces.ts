import { INews } from "../interfaces/news";

export interface IAuth {
  status: string;
  token: string | null;
  tokenType: string | null;
  errorMessage: string | null;
}

export interface IUserData {
  id: string;
  first_name: string;
  last_name: string;
  created_at: string;
  avatar: string;
  bio: string;
  email: string;
}

export interface IUser {
  status: string;
  data: IUserData;
}

export interface ILoginResponse {
  access_token: string;
  token_type: string;
}

export interface INewsState extends INews {
  status: string;
}
