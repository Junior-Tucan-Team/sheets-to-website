import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/partials/Header';
import Editor from './components/Editor';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App" >
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route path="/editor" component={Editor}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
