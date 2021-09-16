import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestLogin } from '../redux/actions/authActions';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
  dispatch(requestLogin(email, password));
};

 return (
   <form>
     <label>Email</label>
     <input
       type="email"
       onChange={(e) => setEmail(e.target.value)}
     />
     <label>Password</label>
     <input
       type="password"
       onChange={(e) => setPassword(e.target.value)}
     />
     <button onClick={handleLogin}>Submit</button>
   </form>
);
 }
export default LoginPage;
