// src/App.tsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import Login from './components/Login'

const App: React.FC = () => {
  return (
    <Box p={4}>
      <Login />
    </Box>
  );
};

export default App;
