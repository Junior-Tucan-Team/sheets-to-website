import { combineReducers } from 'redux';
import auth from './authReducer';
import editor from './editorReducer';
import forms from './formReducer';
import submissions from './submissionReducer';

const rootReducer = combineReducers({
  auth,
  editor,
  forms,
  submissions
});

export default rootReducer;
