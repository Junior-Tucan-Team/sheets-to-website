import { all } from 'redux-saga/effects';
import auth from './authSaga';
import formSagas from './formSaga';
import questionsSagas from './questionSaga';

export default function* rootSaga() {
  yield all([
    ...auth,
    ...formSagas,
    ...questionsSagas
  ]);
}
