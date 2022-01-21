import { combineReducers } from "redux";
import todo from "./todo";
import persist from "./persist";
import storage from "./storage";
import auth from "./auth";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({ todo, persist, storage, auth });

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
