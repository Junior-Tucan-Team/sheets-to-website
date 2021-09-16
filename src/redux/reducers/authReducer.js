import { produce } from 'immer';
import { LOGIN_SUCCESS } from '../constants/actionTypes';

const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => produce(state, draft => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
        const { payload } = action;
        // eslint-disable-next-line no-param-reassign
        draft.credentials = payload;
        return state;
    }
    default:
      return state;
}
});


export default authReducer;
