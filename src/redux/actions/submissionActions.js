import { SUBMISSION_REQUEST } from '../constants/actionTypes';

export const submissionsRequest = (formID) => ({
  type: SUBMISSION_REQUEST,
  payload: { formID }
});
