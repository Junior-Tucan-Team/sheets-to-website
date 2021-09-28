import { takeEvery, call, put } from 'redux-saga/effects';
import { SUBMISSION_FAILURE, SUBMISSION_REQUEST, SUBMISSION_SUCCESS } from '../constants/actionTypes';
import { getFormSubmissions } from '../lib/api';

function* getFormSubmissionsRequest(action) {
  try {
    const formQuestions = yield call(getFormSubmissions, action.payload);
    if (formQuestions.data.responseCode === 200) {
      yield put({
        type: SUBMISSION_SUCCESS,
        payload: formQuestions.data.content
      });
    } else {
      yield put({ type: SUBMISSION_FAILURE });
    }
  } catch (e) {
    yield put({ type: SUBMISSION_FAILURE });
  }
}

const questionsSagas = [
  takeEvery(SUBMISSION_REQUEST, getFormSubmissionsRequest),
];

export default questionsSagas;
