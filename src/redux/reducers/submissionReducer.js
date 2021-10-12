import { SUBMISSION_FAILURE, SUBMISSION_SUCCESS, SUBMISSION_REQUEST, UPDATE_SUBMISSION } from '../constants/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  submissions: {},
  error: null,
};

const submissionsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UPDATE_SUBMISSION: {
      const { key, value, submissionID, formID } = payload;
      const submissionList = state.submissions[formID];
      const foundSubmission = submissionList
        .find(sub => sub.id === submissionID);
      const foundSubmissionIndex = submissionList
        .findIndex(sub => sub.id === submissionID);
      const foundAnswers = foundSubmission.answers;
      const foundQuestion = foundAnswers[key];
      const updatedQuestion = { ...foundQuestion, answer: value };
      const updatedAnswers = { ...foundAnswers, [key]: updatedQuestion };
      const updatedSubmission = { ...foundSubmission, answers: updatedAnswers };
      const updatedSubmissionList = [...submissionList.slice(0, foundSubmissionIndex),
        updatedSubmission, ...submissionList.slice(foundSubmissionIndex + 1)];
      return {
        ...state,
        submissions: { ...state.submissions, [formID]: updatedSubmissionList }
      };
    }
    case SUBMISSION_REQUEST: {
      return { ...state, isLoading: true };
  }
    case SUBMISSION_SUCCESS: {
        const { formID, submissions } = payload;
        return {
          ...state,
          submissions: { ...state.submissions, [formID]: submissions },
          isLoading: false
         };
    }
    case SUBMISSION_FAILURE: {
      return { ...state, error: payload };
  }
    default:
      return state;
}
};

export default submissionsReducer;
