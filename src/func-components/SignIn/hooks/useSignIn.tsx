import { SignInRequestType } from "@/types/auth";
import { useForm } from "react-hook-form";

import { signInAction } from "@/redux/reducers/auth";
import { RootStateType } from "@/redux/reducers";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";

const useSignIn = () => {
  const dispatch = useDispatch();
  const { accessToken, message } = useSelector((state: RootStateType) => {
    return state.auth;
  });

  const hookForm = useForm({
    mode: "onBlur",
  });

  const handleSignIn = (formData: SignInRequestType) => {
    dispatch(signInAction.request(formData));

    accessToken ? Router.push("/") : message ? alert(message) : null;
  };

  return { hookForm, handleSignIn };
};

export default useSignIn;
