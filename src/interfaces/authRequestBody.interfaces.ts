export interface ISignupRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ILoginServiceReturn {
  accessToken: string;
  refreshToken: string;
}

export interface IRefreshAuthServiceReturn {
  accesstoken: string;
  refreshtoken: string;
}
