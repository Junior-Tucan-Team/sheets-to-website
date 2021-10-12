import { SUBMISSION_REQUEST, UPDATE_SUBMISSION } from '../constants/actionTypes';

export const submissionsRequest = (formID) => ({
  type: SUBMISSION_REQUEST,
  payload: { formID }
});

export const updateSubmissionsRequest = ({ key, value, submissionID, formID }) => ({
  type: UPDATE_SUBMISSION,
  payload: { key, value, submissionID, formID }
});
