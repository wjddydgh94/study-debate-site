import React from "react";
import { useForm } from "react-hook-form";

const useSignUp = () => {
  const hookForm = useForm({
    mode: "onSubmit",
  });

  const handleSignUp = () => {};

  return { hookForm, handleSignUp };
};

export default useSignUp;
