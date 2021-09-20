import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../constants/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  user: undefined,
  error: null,
};

const authReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true };
  }
    case LOGIN_SUCCESS: {
        return { ...state, user: payload, isLoading: false };
    }
    case LOGIN_FAILURE: {
      return { ...state, error: payload };
  }
    default:
      return state;
}
};


export default authReducer;
