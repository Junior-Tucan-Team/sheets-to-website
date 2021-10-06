import { LOGIN_REQUEST } from '../constants/actionTypes';

export const requestLogin = (credentials, history) => ({
  type: LOGIN_REQUEST,
  payload: {
    credentials,
    history
  }
});
