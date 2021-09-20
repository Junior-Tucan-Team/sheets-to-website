import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestLogin } from '../redux/actions/authActions';

function LoginPage() {
  const [email, setEmail] = useState('efe.matey@gmail.com');
  const [password, setPassword] = useState('123456efe');

  const dispatch = useDispatch();

  const handleLogin = (e) => {
  e.preventDefault();
  dispatch(requestLogin({ email, password }));
};

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
