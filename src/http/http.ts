import axios from "axios";

interface IData {
  token_type: string;
  access_token: string;
}

export const publicApi = axios.create({
  baseURL: "https://taupe-croissant-c4162a.netlify.app/api",
});

export const privateApi = axios.create({
  baseURL: "https://taupe-croissant-c4162a.netlify.app/api",
});

export const token = {
  set: (data: IData) => {
    privateApi.defaults.headers.Authorization = `${data.token_type} ${data.access_token}`;
  },

  remove: () => {
    privateApi.defaults.headers.Authorization = null;
  },
};
