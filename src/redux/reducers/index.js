import { combineReducers } from 'redux';
import auth from './authReducer';
import editor from './editorReducer';

const rootReducer = combineReducers({
  auth,
  editor
});

export default rootReducer;
