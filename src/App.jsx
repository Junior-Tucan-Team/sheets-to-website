import React from 'react';
import './index.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/partials/Header';
import Editor from './components/Editor';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App" >
      <Header />
      {/* <LoginPage /> */}
      <Editor />
    </div>
  );
}

export default App;
