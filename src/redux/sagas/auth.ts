import { signInUrl } from "@/api/auth";
import { SignInUrlRequestType, SignInUrlResponseType } from "@/types/auth";
import { call, put, takeLatest } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { AuthAction, SignInAction } from "../reducers/auth";
import Router from "next/router";

function* signInSaga(action: AuthAction) {
  try {
    const res: AxiosResponse<SignInUrlResponseType> = yield call(
      signInUrl,
      action.payload as SignInUrlRequestType
    );
    console.log(res);
    if (res.status === 200) {
      yield put(SignInAction.success(res.data.accessToken));
      Router.push("/");
    } else {
      yield put(SignInAction.cancel(res.data));
      alert(res.data);
    }
  } catch (error) {
    yield put(SignInAction.failure(error));
  }
}

export default function* authSaga() {
  yield takeLatest(SignInAction.request, signInSaga);
}
