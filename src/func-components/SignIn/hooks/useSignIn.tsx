import { signInUrl } from "@/api/auth";
import { SignInUrlRequestType } from "@/types/auth";
import React from "react";
import { useForm } from "react-hook-form";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { signIn } from "@/redux/reducers/auth";

const useSignIn = () => {
  const dispatch = useDispatch();

  const hookForm = useForm({
    mode: "onBlur",
  });

  const handleSignIn = async (formData: SignInUrlRequestType) => {
    const res = await signInUrl(formData);
    console.log(res);
    if (res.status === 200) {
      dispatch(signIn(res.data.accessToken));
      Router.push("/");
    } else {
      alert(res.data);
    }
  };

  return { hookForm, handleSignIn };
};

export default useSignIn;
