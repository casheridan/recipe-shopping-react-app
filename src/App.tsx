import React from 'react';
import { Box } from '@chakra-ui/react';
import Recipe from './components/Recipe';
import BottomBar from './components/BottomBar';

const App: React.FC = () => {
  return (
    <>
      <Box p={4}>
        <Recipe />
      </Box>
      <BottomBar />
    </>
  );
};

export default App;
