export interface SignUpRequestType
  extends Pick<SignInRequestType, "email" | "password"> {}

export interface SignInRequestType {
  email: string;
  password: string;
}

export interface SignInResponseType {
  accessToken: string;
  user: {
    id: number;
    email: string;
  };
}
