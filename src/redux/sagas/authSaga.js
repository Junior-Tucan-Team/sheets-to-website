import { takeEvery, call, put } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/actionTypes';
import { login } from '../lib/api';
import { setApiKey } from '../../utils/axios';
import { requestGetForms } from '../actions/formActions';

function* loginRequest(action) {
  try {
    const { credentials, history } = action.payload;
    const userData = yield call(login, credentials);
    if (userData.data.responseCode === 200) {
      yield put({
        type: LOGIN_SUCCESS,
        payload: userData.data.content
      });
      setApiKey(userData.data.content.appKey);
      history.push('/');
      yield put(requestGetForms());
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
