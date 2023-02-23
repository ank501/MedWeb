import React from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (

    <ChakraProvider>
    <div className="App">
     
     <AllRoutes/>

    </div>
    </ChakraProvider>
  );
}

export default App;
