import { combineReducers } from 'redux';
import auth from './authReducer';
import editor from './editorReducer';
import forms from './formReducer';
import questions from './questionReducer';

const rootReducer = combineReducers({
  auth,
  editor,
  forms,
  questions
});

export default rootReducer;
