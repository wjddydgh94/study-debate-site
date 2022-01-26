import { signInUrl } from "@/api/auth";
import { SignInRequestType, SignInResponseType } from "@/types/auth";
import { call, put, takeLatest } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { AuthAction, signInAction } from "../reducers/auth";

function* signInSaga(action: AuthAction) {
  try {
    const res: AxiosResponse<SignInResponseType> = yield call(
      signInUrl,
      action.payload as SignInRequestType
    );
    if (res.status === 200) {
      yield put(signInAction.success(res.data.accessToken));
    } else {
      yield put(signInAction.cancel(res.data));
    }
  } catch (error) {
    yield put(signInAction.failure(error));
  }
}

export default function* authSaga() {
  yield takeLatest(signInAction.request, signInSaga);
}
