/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './components/partials/Header';
import Editor from './components/Editor';
import LoginPage from './components/LoginPage';

const PrivateRoute = ({ isLoggedIn, ...props }) => {
  return (
    isLoggedIn
    ? <Route {...props} />
    : <Redirect to="/login" />
  );
};

function App() {
  const loggedIn = useSelector(state => state.auth?.user?.appKey);
  // useEffect(() => {
  //   if (!loggedIn) {
  //     return <Redirect push to="/login"/>;
  //   } return <></>;
  // }, [loggedIn]);

  return (
    <div className="App" >
      <Header />
      <Router>
        <Switch>
          <PrivateRoute exact isLoggedIn={loggedIn} path="/" component={Editor} />
          <Route path="/login" component={LoginPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
