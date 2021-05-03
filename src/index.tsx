import type {AppQuery as AppQueryType} from './__generated__/AppQuery.graphql'
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme';

import {useRelayEnvironment, loadQuery, RelayEnvironmentProvider} from 'react-relay';

import AppQuery from './__generated__/AppQuery.graphql';
import Environment from './tmdb';
import { ChakraProvider } from "@chakra-ui/react"

type Props = {
  id: number
}

function Root({id}: Props) {
  const environment = useRelayEnvironment();
  const ref = loadQuery<AppQueryType>(environment, AppQuery, { id });
  return <App data={ref}/>;
}

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={Environment}>
      <ChakraProvider theme={theme}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Root id={12}/>
        </Suspense>
      </ChakraProvider>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);