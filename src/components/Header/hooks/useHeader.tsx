import { signOutAction } from "@/redux/reducers/auth";
import React from "react";
import { useDispatch } from "react-redux";

const useHeader = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOutAction(null));
  };

  return { handleSignOut };
};

export default useHeader;
