import { all } from "redux-saga/effects";
import auth from "./auth";
import todo from "./todo";

const rootSaga = function* () {
  yield all([todo(), auth()]);
};

export default rootSaga;
