import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Button, Flex } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Flex align="center" justify="center">
        <div>
          <div className="App">Hello World</div>
          <Button colorScheme="blue">Button</Button>
        </div>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
