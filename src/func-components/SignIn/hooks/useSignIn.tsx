import { SignInRequestType } from "@/types/auth";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "@/redux/reducers/auth";
import { RootStateType } from "@/redux/reducers";
import Router from "next/router";

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

    accessToken ? Router.push("/") : alert(message);
  };

  return { hookForm, handleSignIn };
};

export default useSignIn;
