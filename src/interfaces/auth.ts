export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface ISignUpCredentials extends ISignInCredentials {
  first_name: string;
  last_name: string;
}

export interface IUser {
  id: number | string;
  first_name: string;
  last_name: string;
  created_at: string;
  avatar?: string;
  bio?: string;
  email: string;
}
