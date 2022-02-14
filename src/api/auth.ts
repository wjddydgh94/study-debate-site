import { SignInRequestType, SignUpRequestType } from "@/types/auth";

import { callApi } from "./config";

export const signUpApi = (req: SignUpRequestType) => {
  return callApi({
    url: "/register",
    method: "POST",
    data: {
      email: req.email,
      password: req.password,
    },
    isAuth: true,
  });
};

export const signInApi = (req: SignInRequestType) => {
  return callApi({
    url: "/login",
    method: "POST",
    data: {
      email: req.email,
      password: req.password,
    },
    isAuth: true,
  });
};
