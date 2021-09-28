import { QUESTION_REQUEST } from '../constants/actionTypes';

export const questionsRequest = (payload) => ({
  type: QUESTION_REQUEST,
  payload
});
