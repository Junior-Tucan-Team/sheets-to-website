import { GET_QUESTION_REQUEST } from '../constants/actionTypes';

export const getQuestionsRequest = (formID) => ({
  type: GET_QUESTION_REQUEST,
  payload: { formID }
});
