import { takeEvery, call, put } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/actionTypes';
import { login } from '../lib/api';

function* loginRequest(action) {
  try {
    const { email, password } = action.payload;
    const userData = yield call(login, { email, password });
    if (userData.data.responseCode === 200) {
      yield put({
        type: LOGIN_SUCCESS,
        payload: userData.data.content
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
