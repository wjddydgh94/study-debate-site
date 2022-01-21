import produce from "immer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ActionType, createAction } from "typesafe-actions";

export const actionTypes = {
  SIGN_IN: "auth/SIGN_IN",
  LOG_OUT: "auth/LOG_OUT",
};

export const changeAccessTokenAction = createAction(
  actionTypes.SIGN_IN
  // actionTypes.LOG_OUT
)<any, any>();

const actions = { changeAccessTokenAction };

export type AuthAction = ActionType<typeof actions>;

export interface AuthStateType {
  accessToken: string;
}

export const initialState: AuthStateType = {
  accessToken: "",
};

const AuthReducer = persistReducer(
  {
    storage,
    key: "at",
    whitelist: ["accessToken"],
  },
  (state: AuthStateType = initialState, action: AuthAction) =>
    produce(state, (draft) => {
      switch (action.type) {
        case actionTypes.SIGN_IN:
          draft.accessToken = action.payload;
          break;
        // case actionTypes.LOG_OUT:
        //   draft.accessToken = "";
        default:
          break;
      }
    })
);

export default AuthReducer;
