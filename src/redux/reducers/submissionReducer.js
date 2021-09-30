import { SUBMISSION_FAILURE, SUBMISSION_SUCCESS, SUBMISSION_REQUEST } from '../constants/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  submissions: {},
  error: null,
};

const submissionsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
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
