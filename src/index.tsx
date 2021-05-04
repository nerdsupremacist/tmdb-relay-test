import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme';

import { RelayEnvironmentProvider } from 'react-relay';

import Environment from './tmdb';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={Environment}>
      <ChakraProvider theme={theme}>
        <App/>
      </ChakraProvider>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);