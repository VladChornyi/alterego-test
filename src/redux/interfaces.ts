import { INews } from "../interfaces/news";

export interface IAuth {
  status: string;
  token: string | null;
  tokenType: string | null;
}

export interface IUser {
  status: string;
  data: any;
}

export interface INewsState extends INews {
  status: string;
}
