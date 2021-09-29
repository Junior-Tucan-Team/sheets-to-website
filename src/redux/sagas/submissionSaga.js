import { takeEvery, call, put } from 'redux-saga/effects';
import { SUBMISSION_FAILURE, SUBMISSION_REQUEST, SUBMISSION_SUCCESS } from '../constants/actionTypes';
import { getFormSubmissions } from '../lib/api';

function* getFormSubmissionsRequest(action) {
  try {
    const formSubmissions = yield call(getFormSubmissions, action.payload);
    yield put({
      type: SUBMISSION_SUCCESS,
      payload: formSubmissions
    });
  } catch (e) {
    yield put({ type: SUBMISSION_FAILURE });
  }
}

const submissionsSagas = [
  takeEvery(SUBMISSION_REQUEST, getFormSubmissionsRequest),
];

export default submissionsSagas;
