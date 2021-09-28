import { takeEvery, call, put } from 'redux-saga/effects';
import { FORM_FAILURE, FORM_REQUEST, FORM_SUCCESS } from '../constants/actionTypes';
import { getUserForms } from '../lib/api';

function* getFormRequest() {
  try {
    const formData = yield call(getUserForms);
      yield put({
        type: FORM_SUCCESS,
        payload: formData
      });
  } catch (e) {
    yield put({ type: FORM_FAILURE });
  }
}

const formSagas = [
  takeEvery(FORM_REQUEST, getFormRequest),
];

export default formSagas;
