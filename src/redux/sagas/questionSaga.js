import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_QUESTION_FAILURE, GET_QUESTION_REQUEST, GET_QUESTION_SUCCESS } from '../constants/actionTypes';
import { getFormQuestions } from '../lib/api';

function* getFormQuestionsRequest(action) {
  try {
    const { formID } = action.payload;
    const formQuestions = yield call(getFormQuestions, formID);
    yield put({
      type: GET_QUESTION_SUCCESS,
      payload: {
          formID,
          questions: formQuestions
      }
    });
  } catch (e) {
    yield put({ type: GET_QUESTION_FAILURE });
  }
}

const questionsSagas = [
  takeEvery(GET_QUESTION_REQUEST, getFormQuestionsRequest),
];

export default questionsSagas;
