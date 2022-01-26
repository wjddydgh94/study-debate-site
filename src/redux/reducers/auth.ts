import { SignInRequestType, SignInResponseType } from "@/types/auth";
import produce from "immer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ActionType, createAction, createAsyncAction } from "typesafe-actions";

export const actionTypes = {
  SIGN_IN_REQUEST: "auth/SIGN_IN_REQUEST",
  SIGN_IN_SUCCESS: "auth/SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE: "auth/SIGN_IN_FAILURE",
  SIGN_IN_CANCLE: "auth/SIGN_IN_CANCLE",

  SIGN_OUT: "auth/SIGN_OUT",
};

export const signInAction = createAsyncAction(
  actionTypes.SIGN_IN_REQUEST,
  actionTypes.SIGN_IN_SUCCESS,
  actionTypes.SIGN_IN_FAILURE,
  actionTypes.SIGN_IN_CANCLE
)<SignInRequestType, string, Error, SignInResponseType>();

export const signOutAction = createAction(actionTypes.SIGN_OUT)<null>();

const actions = { signInAction, signOutAction };

export type AuthAction = ActionType<typeof actions>;

export interface AuthStateType {
  signInLoading: boolean;
  accessToken: string;
  error?: Error;
  message: string;
}

export const initialState: AuthStateType = {
  signInLoading: false,
  accessToken: "",
  message: "",
};

const AuthReducer = persistReducer(
  {
    storage,
    key: "at",
    whitelist: ["accessToken", "message"],
  },
  (state: AuthStateType = initialState, action: AuthAction) =>
    produce(state, (draft) => {
      switch (action.type) {
        case actionTypes.SIGN_IN_REQUEST:
          draft.signInLoading = true;
          break;
        case actionTypes.SIGN_IN_SUCCESS:
          draft.signInLoading = false;
          draft.accessToken = action.payload as string;
          break;
        case actionTypes.SIGN_IN_FAILURE:
          draft.signInLoading = false;
          draft.error = action.payload as Error;
          break;
        case actionTypes.SIGN_IN_CANCLE:
          draft.signInLoading = false;
          draft.message = action.payload as string;
          break;
        case actionTypes.SIGN_OUT:
          draft.accessToken = "";
        default:
          break;
      }
    })
);

export default AuthReducer;
