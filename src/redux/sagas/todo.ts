import { put, takeLatest } from 'redux-saga/effects';
import { TodoAction, registerTodoAction } from '@/redux/reducers/todo';

function* registerTodoSaga(action: TodoAction) {
  yield put(
    registerTodoAction.success({
      statusCode: 200,
    }),
  );
}

export default function* todoSaga() {
  yield takeLatest(registerTodoAction.request, registerTodoSaga);
}
