import { combineReducers } from 'redux';
import auth from './authReducer';
import editor from './editorReducer';
import forms from './formReducer';

const rootReducer = combineReducers({
  auth,
  editor,
  forms
});

export default rootReducer;
