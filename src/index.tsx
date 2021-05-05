import React from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'react-relay';
import { ChakraProvider } from '@chakra-ui/react'

import App from 'App';

import theme from 'theme';
import tmdb from 'tmdb';

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={tmdb}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);