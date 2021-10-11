import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { shape } from 'prop-types';
import { requestLogin } from '../redux/actions/authActions';

function LoginPage(props) {
  const [email, setEmail] = useState('nojopaf707@btkylj.com');
  const [password, setPassword] = useState('mE*2376gf');
  const [signedUp, setSignedUp] = useState('log-in');
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const { history } = props;
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);
    formData.append('appName', 'sheets2website');
    formData.append('access', 'full');
    dispatch(requestLogin(formData, history));
  };

  const changePopUp = (e) => {
    const loginForm = document.getElementsByClassName('login-form');
    const gglButton = document.getElementsByClassName('google-button');
    const fcbBUtton = document.getElementsByClassName('facebook-button');
    const hrznLine = document.getElementsByClassName('horizontal-line');
    const orText = document.getElementsByClassName('or-text');
    const chngmdText = document.getElementsByClassName('change-mod-text');
    e.preventDefault();
    if (e.target.value === 'log-in') {
      setSignedUp('sign-in');
      loginForm[0].style.height = '500px';
      gglButton[0].style.top = '149px';
      fcbBUtton[0].style.top = '210px';
      hrznLine[0].style.top = '295px';
      hrznLine[1].style.top = '295px';
      orText[0].style.top = '285px';
      chngmdText[0].style.top = '421px';
    } else {
      setSignedUp('log-in');
      loginForm[0].style.height = '665px';
      gglButton[0].style.top = '117px';
      fcbBUtton[0].style.top = '180px';
      hrznLine[0].style.top = '261px';
      hrznLine[1].style.top = '261px';
      orText[0].style.top = '251px';
      chngmdText[0].style.top = '588px';
    }
  };

  return (
    <form className="login-form">
      {
        signedUp === 'log-in' ?
          <span className="welcome-back">Welcome Back!</span> :
          <div>
            <img className="jotform-logo" src="https://cdn.jotfor.ms/assets/img/logo2021/jotform-logo.svg" alt="JotForm Logo"/>
            <span className="jotform-logo-header">Please sign up to start collecting data</span>
          </div>
      }
      <button className="signed-up-button google-button">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="Google Logo" />
        {signedUp === 'log-in' ? 'Log in ' : 'Sign up '} with Google
      </button>
      <button className="signed-up-button facebook-button">
        <img src="https://nrgteleresources.com/wp-content/uploads/facebook-logo-white.png" alt="Google Logo" />
        {signedUp === 'log-in' ? 'Log in ' : 'Sign up '} with Facebook
      </button>
      <div>
        <div className="horizontal-line" id="left-line"/>
        <span className="or-text">OR</span>
        <div className="horizontal-line" id="right-line"/>
      </div>
      {
        signedUp === 'log-in' ?
          <div>
            <label className="form-input-absolute login-labels" id="above-login-label">Username or Email</label>
            <br/>
            <input
              className="form-input-absolute color: #3C3C3C;"
              id="above-login-input"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label className="form-input-absolute login-labels" id="bottom-login-label">Password</label>
            <br/>
            <input
              className="form-input-absolute color: #3C3C3C;"
              id="bottom-login-input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <span className="forgot-text">Forgot Password?</span>
          </div> :
        null
      }
      {
        signedUp === 'log-in' ?
          <div>
            <button className="login-form-submit-button" onClick={handleLogin}>Log in</button>
            <br/>
            <span className="change-mod-text">
              Dont have an account?
              <button className="change-signed-up" onClick={changePopUp} value="log-in">Sign in</button>
            </span>
          </div> :
          <div>
            <button className="signed-up-button sign-up-wmail">
              <img src="https://toppng.com/uploads/preview/icon-mail-png-transparent-background-mail-logo-11562851894ksatrtd2da.png" alt="mail logo"/>
              Sign in with Email
            </button>
            <br/>
            <span className="change-mod-text">
              Already have an account?
              <button className="change-signed-up" onClick={changePopUp} value="sign-in">Log in</button>
            </span>
          </div>
      }
    </form>
  );
}


LoginPage.propTypes = {
  history: shape().isRequired,
};

export default LoginPage;
