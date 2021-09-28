import { QUESTION_FAILURE, QUESTION_SUCCESS, QUESTION_REQUEST } from '../constants/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  questions: [],
  error: null,
};

const questionsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case QUESTION_REQUEST: {
      return { ...state, isLoading: true };
  }
    case QUESTION_SUCCESS: {
        return { ...state, questions: payload, isLoading: false };
    }
    case QUESTION_FAILURE: {
      return { ...state, error: payload };
  }
    default:
      return state;
}
};

export default questionsReducer;
