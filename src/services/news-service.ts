import { IGetNewsParams } from "./../interfaces/news";
import { INews } from "../interfaces/news";
import { publicApi } from "./../http/http";

export const getNewsService = async (params?: IGetNewsParams) => {
  const { data } = await publicApi.get<INews>("/posts", { params });
  return data;
};
