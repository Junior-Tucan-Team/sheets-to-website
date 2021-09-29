import { combineReducers } from 'redux';
import auth from './authReducer';
import editor from './editorReducer';
import forms from './formReducer';
import submissions from './submissionReducer';
import questions from './questionReducer';

const rootReducer = combineReducers({
  auth,
  editor,
  forms,
  submissions,
  questions
});

export default rootReducer;
