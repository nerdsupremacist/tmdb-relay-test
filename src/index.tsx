import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'react-relay';

import App from './App';
import theme from './theme';
import Environment from './tmdb';

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={Environment}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);