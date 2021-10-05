import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { requestLogin } from '../redux/actions/authActions';

function LoginPage() {
  const [email, setEmail] = useState('xamatag258@rerunway.com');
  const [password, setPassword] = useState('Me*45678');
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);
    formData.append('appName', 'sheets2website');
    formData.append('access', 'full');
    dispatch(requestLogin(formData));
  };

  const userStatus = useSelector(state => state?.auth?.user?.status);

  if (userStatus === 'ACTIVE') {
    return <Redirect to="/editor"/>;
  }
  return (
    <form>
      <label>Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleLogin}>Submit</button>
    </form>
  );
}

export default LoginPage;
