import { LOGIN_REQUEST } from '../constants/actionTypes';

export const requestLogin = (credentials) => ({
  type: LOGIN_REQUEST,
  payload: {
    credentials
  }
});
