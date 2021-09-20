import { LOGIN_REQUEST } from '../constants/actionTypes';

export const requestLogin = (payload) => ({
  type: LOGIN_REQUEST,
  payload
});
