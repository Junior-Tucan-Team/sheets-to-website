import { FORM_FAILURE, FORM_SUCCESS, FORM_REQUEST } from '../constants/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  forms: [],
  error: null,
};

const formsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FORM_REQUEST: {
      return { ...state, isLoading: true };
  }
    case FORM_SUCCESS: {
        return { ...state, forms: payload, isLoading: false };
    }
    case FORM_FAILURE: {
      return { ...state, error: payload };
  }
    default:
      return state;
}
};

export default formsReducer;
