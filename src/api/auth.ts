import { SignInRequestType, SignUpRequestType } from "@/types/auth";
import axios from "axios";

import { callApi } from "./config";

export const signUpApi = (req: SignUpRequestType) => {
  return axios({
    url: "http://localhost:3001/register",
    method: "POST",
    data: {
      email: req.email,
      password: req.password,
    },
  });
};

export const signInApi = (req: SignInRequestType) => {
  return axios({
    url: "http://localhost:3001/login",
    method: "POST",
    data: {
      email: req.email,
      password: req.password,
    },
  });
};
