import { IUser } from "./../redux/interfaces";
import { ISignUpCredentials, ISignInCredentials } from "./../interfaces/auth";
import { privateApi, publicApi } from "./../http/http";

export const signUpService = async (params: ISignUpCredentials) => {
  await publicApi.get<never>("/users/create", { params });
};

export const signInService = async (params: ISignInCredentials) => {
  const { data } = await publicApi.get<IUser>("/users/login", { params });
  return data;
};

export const refreshUserService = async () => {
  const { data } = await privateApi.get<IUser>("/users/profile");
  return data;
};
