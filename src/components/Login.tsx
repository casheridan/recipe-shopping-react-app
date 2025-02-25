import { useState } from 'react';
import { signIn } from '../lib/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../reducers/slices/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const user = await signIn(email, password);
      dispatch(setUser(user));
      alert('Login successful');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
