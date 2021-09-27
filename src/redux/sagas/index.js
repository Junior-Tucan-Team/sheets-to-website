import { all } from 'redux-saga/effects';
import auth from './authSaga';
import formSagas from './formSaga';

export default function* rootSaga() {
  yield all([
    ...auth,
    ...formSagas
  ]);
}
