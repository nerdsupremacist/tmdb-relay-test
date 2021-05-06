import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'

import { RelayEnvironmentProvider } from 'react-relay';

import App from 'App';

import theme from 'utils/theme';
import tmdb from 'utils/tmdb';

ReactDOM.render(
    <React.StrictMode>
        <RelayEnvironmentProvider environment={tmdb}>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </RelayEnvironmentProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);