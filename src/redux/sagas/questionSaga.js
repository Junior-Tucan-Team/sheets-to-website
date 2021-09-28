import { takeEvery, call, put } from 'redux-saga/effects';
import { QUESTION_FAILURE, QUESTION_REQUEST, QUESTION_SUCCESS } from '../constants/actionTypes';
import { getFormQuestions } from '../lib/api';

function* getFormQuestionsRequest(action) {
  try {
    const formQuestions = yield call(getFormQuestions, action.payload);
    if (formQuestions.data.responseCode === 200) {
      yield put({
        type: QUESTION_SUCCESS,
        payload: formQuestions.data.content
      });
    } else {
      yield put({ type: QUESTION_FAILURE });
    }
  } catch (e) {
    yield put({ type: QUESTION_FAILURE });
  }
}

const questionsSagas = [
  takeEvery(QUESTION_REQUEST, getFormQuestionsRequest),
];

export default questionsSagas;
