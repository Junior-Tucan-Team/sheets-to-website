import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { shape } from 'prop-types';
import { requestLogin } from '../redux/actions/authActions';

function LoginPage(props) {
  const [email, setEmail] = useState('labil14832@busantei.com');
  const [password, setPassword] = useState('bumbumMe*12');
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


  return (
    <form className="login-form">
      <div>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button className="login-form-submit-button" onClick={handleLogin}>Submit</button>
    </form>
  );
}


LoginPage.propTypes = {
  history: shape().isRequired,
};

export default LoginPage;
