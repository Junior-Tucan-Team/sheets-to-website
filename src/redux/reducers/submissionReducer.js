import { SUBMISSION_FAILURE, SUBMISSION_SUCCESS, SUBMISSION_REQUEST } from '../constants/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  questions: [],
  error: null,
};

const questionsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SUBMISSION_REQUEST: {
      return { ...state, isLoading: true };
  }
    case SUBMISSION_SUCCESS: {
        return { ...state, questions: payload, isLoading: false };
    }
    case SUBMISSION_FAILURE: {
      return { ...state, error: payload };
  }
    default:
      return state;
}
};

export default questionsReducer;
