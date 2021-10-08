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
    e.preventDefault();
    if (e.target.value === 'log-in') {
      setSignedUp('sign-in');
    } else {
      setSignedUp('log-in');
    }
  };

  return (
    <form className="login-form">
      {
        signedUp === 'log-in' ?
          <span className="welcome-back">Welcome Back!</span> :
          <div>
            <span>Please sign up to start collecting data</span>
          </div>
      }
      <button className="signed-up-button google-button">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="Google Logo" />
        {signedUp === 'log-in' ? 'Log in ' : 'Sign up '} with Google
      </button>
      <button className="signed-up-button facebook-button">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="Google Logo" />
        {signedUp === 'log-in' ? 'Log in ' : 'Sign up '} with Facebook
      </button>
      <div style={{ marginTop: '27px' }}>
        <div className="horizontal-line"/>
        <span style={{ fontSize: '16px', lineHeight: '20px', color: '#A6A6A6' }}>OR</span>
        <div className="horizontal-line"/>
      </div>
      <div className="horizontal-line"/>
      <div>
        <label>Username of Email</label>
        <br/>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        <label>Password</label>
        <br/>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
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
            <button className="signed-up-button sign-up-wmail">Sign in with Email</button>
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
