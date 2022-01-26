import { SignInRequestType, SignUpRequestType } from "@/types/auth";

import { callApi } from "./config";

export const signUpUrl = (req: SignUpRequestType) => {
  return callApi({
    url: "/register",
    method: "POST",
    data: {
      email: req.email,
      password: req.password,
    },
  });
};

export const signInUrl = (req: SignInRequestType) => {
  return callApi({
    url: "/login",
    method: "POST",
    data: {
      email: req.email,
      password: req.password,
    },
  });
};
