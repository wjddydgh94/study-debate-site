import { signUpApi } from "@/api/auth";
import { SignUpRequestType } from "@/types/auth";
import React from "react";
import { useForm } from "react-hook-form";
import Router from "next/router";

const useSignUp = () => {
  const hookForm = useForm({
    mode: "onBlur",
  });

  const handleSignUp = async (formData: SignUpRequestType) => {
    const res = await signUpApi(formData);
    if (res.status === 201) {
      alert("회원가입이 완료되었습니다.");
      Router.push("/sign-in");
    } else {
      alert(res.data);
    }
  };

  return { hookForm, handleSignUp };
};

export default useSignUp;
