import { SignInUrlRequestType } from "@/types/auth";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { SignInAction } from "@/redux/reducers/auth";

const useSignIn = () => {
  const dispatch = useDispatch();

  const hookForm = useForm({
    mode: "onBlur",
  });

  const handleSignIn = async (formData: SignInUrlRequestType) => {
    dispatch(SignInAction.request(formData));
  };

  return { hookForm, handleSignIn };
};

export default useSignIn;
