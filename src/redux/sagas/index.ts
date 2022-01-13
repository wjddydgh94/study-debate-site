import { all } from 'redux-saga/effects';
import todo from './todo';

const rootSaga = function* () {
  yield all([todo()]);
};

export default rootSaga;
