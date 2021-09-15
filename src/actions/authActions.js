import { LOGIN_REQUEST } from '../constants/actionTypes';

export const requestLogin = (email, password) => ({ // pure function side effect, preditable
  type: LOGIN_REQUEST,
  payload: {
    email,
    password
  }
})