export interface User{
  id?: number;
  username: string;
  email?: string;
  roles?: Array<string>;
  password?: string;
}

export interface LoginResponse{
  accessToken?: string;
  refreshToken?: string;
}

