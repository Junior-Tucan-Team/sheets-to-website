import { takeEvery, call, put } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/actionTypes';
import { login } from '../lib/api';

function* loginRequest(action) {
  try {
    const { email, password } = action.payload;
    const { responseCode, content } = yield call(login, email, password);
    console.log(content, responseCode);
    if (responseCode === 200) {
      yield put({
        type: LOGIN_SUCCESS,
        payload: content
      });
    } else {
      yield put({ type: LOGIN_FAILURE });
    }
  } catch (e) {
    yield put({ type: LOGIN_FAILURE });
  }
}

const authSagas = [
  takeEvery(LOGIN_REQUEST, loginRequest),
];

export default authSagas;
