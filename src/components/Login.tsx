import { useState } from 'react';
import { signIn, signUp, signUpGoogle } from '../lib/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../reducers/slices/authSlice';
import LogoutButton from './LogoutButton';

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

  const handleSignup = async () => {
    try {
      const user = await signUp(email, password);
      dispatch(setUser(user));
    } catch (error: any) {
      alert(error.message);
    }
  }

  const handleLoginGoogle = async () => {
    try {
      await signUpGoogle();
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <div>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Sign Up</button>
        <button onClick={handleLoginGoogle}>Login With Google</button>
        <LogoutButton />
    </div>
  );
};

export default Login;
