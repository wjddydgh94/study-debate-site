import { SignUpUrlRequestType } from "@/types/auth";

import { callApi } from "./config";

export const signUpUrl = (req: SignUpUrlRequestType) => {
  return callApi({
    url: "/register",
    method: "POST",
    data: {
      email: req.email,
      password: req.password,
    },
  });
};

export const signInUrl = (req: SignUpUrlRequestType) => {
  return callApi({
    url: "/login",
    method: "POST",
    data: {
      email: req.email,
      password: req.password,
    },
  });
};
