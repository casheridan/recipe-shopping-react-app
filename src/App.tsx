// src/App.tsx
import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './reducers';

const App: React.FC = () => {
  const count: number = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <Box p={4}>
      <Text fontSize="2xl">Count: {count}</Text>
      <Button colorScheme="teal" onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment
      </Button>
      <Button
        colorScheme="red"
        ml={2}
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
        Decrement
      </Button>
    </Box>
  );
};

export default App;
