import { INews } from "../interfaces/news";
import { publicApi } from "./../http/http";

interface IParams {
  limit?: number;
  pages?: number;
  search?: string;
}

export const getNewsService = async (params?: IParams) => {
  const { data } = await publicApi.get<INews>("/posts", { params });
  return data;
};
