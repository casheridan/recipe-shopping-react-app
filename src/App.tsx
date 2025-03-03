import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Recipe from './components/Recipe';
import Login from './components/Login';
import BottomBar from './components/BottomBar';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from './lib/supabase';
import { setUser } from './reducers/slices/authSlice';
import { RootState } from './store/store';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      dispatch(setUser(session?.user || null))
    });

    return () => {
      authListener.subscription.unsubscribe();
    }
  }, [dispatch]);

  return (
    <>
      {
        user ? (
          <Box p={4}>
            <Recipe />
            <BottomBar />
          </Box>
        ) : (
          
          <Box p={4}>
            <Login />
          </Box>
        )
      }
    </>
  );
};

export default App;
