export interface SignUpUrlRequestType
  extends Pick<SignInUrlRequestType, "email" | "password"> {}

export interface SignInUrlRequestType {
  email: string;
  password: string;
}

export interface SignInUrlResponseType {
  accessToken: string;
  user: {
    id: number;
    email: string;
  };
}
