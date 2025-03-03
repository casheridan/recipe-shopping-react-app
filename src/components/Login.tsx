import { useState, useCallback, useMemo, memo } from 'react';
import { signIn, signUp, signUpGoogle } from '../lib/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../reducers/slices/authSlice';
import { Button, Input, Icon, VStack, HStack } from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = useCallback(async () => {
    try {
      const user: any = await signIn(email, password);
      dispatch(setUser(user));
    } catch (error: any) {
      alert(error.message);
    }
  }, [email, password, dispatch]);

  const handleSignup = useCallback(async () => {
    try {
      const user: any = await signUp(email, password);
      dispatch(setUser(user));
    } catch (error: any) {
      alert(error.message);
    }
  }, [email, password, dispatch]);

  const handleLoginGoogle = useCallback(async () => {
    try {
      const user: any = await signUpGoogle();
      dispatch(setUser(user));
    } catch (error: any) {
      alert(error.message);
    }
  }, [dispatch]);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const memoizedBox = useMemo(() => (
    <VStack w={"100%"}>
      <Input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
        w={"75%"}
      />
      <Input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
        w={"75%"}
      />
      <HStack>
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleSignup}>Sign Up</Button>
      </HStack>
      <Icon onClick={handleLoginGoogle}>
        <FaGoogle />
      </Icon>
    </VStack>
  ), [email, password, handleLogin, handleSignup, handleLoginGoogle, handleEmailChange, handlePasswordChange]);

  return memoizedBox;
};

export default memo(Login);
