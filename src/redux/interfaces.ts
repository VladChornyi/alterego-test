import { INews } from "../interfaces/news";

export interface IAuth {
  status: string;
  token: string | null;
  tokenType: string | null;
  errorMessage: string | null;
}

export interface IUser {
  status: string;
  data: any;
}

export interface ILoginResponse {
  access_token: string;
  token_type: string;
}

export interface INewsState extends INews {
  status: string;
}
