import { GET_QUESTION_REQUEST, GET_QUESTION_SUCCESS, GET_QUESTION_FAILURE } from '../constants/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  questions: {},
  error: null,
};

const questionReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_QUESTION_REQUEST: {
      return { ...state, isLoading: true };
  }
    case GET_QUESTION_SUCCESS: {
        const { formID, questions } = payload;
        return {
            ...state,
             questions: { ...state.questions, [formID]: questions },
             isLoading: false
            };
    }
    case GET_QUESTION_FAILURE: {
      return { ...state, error: payload, isLoading: false };
  }
    default:
      return state;
}
};

export default questionReducer;
