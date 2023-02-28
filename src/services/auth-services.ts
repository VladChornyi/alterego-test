import { ILoginResponse, IUserData } from "./../redux/interfaces";
import { ISignUpCredentials, ISignInCredentials } from "./../interfaces/auth";
import { privateApi, publicApi } from "./../http/http";

export const signUpService = async (body: ISignUpCredentials) => {
  await publicApi.post<never>("/users/create", body);
};

export const signInService = async (body: ISignInCredentials) => {
  const { data } = await publicApi.post<ILoginResponse>("/users/login", body);
  return data;
};
export const refreshUserService = async () => {
  const { data } = await privateApi.get<IUserData>("/users/profile");
  return data;
};
