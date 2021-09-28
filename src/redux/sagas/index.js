import { all } from 'redux-saga/effects';
import auth from './authSaga';
import formSagas from './formSaga';
import submissionsSagas from './submissionSaga';

export default function* rootSaga() {
  yield all([
    ...auth,
    ...formSagas,
    ...submissionsSagas
  ]);
}
