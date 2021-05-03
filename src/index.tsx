import type {AppQuery as AppQueryType} from './__generated__/AppQuery.graphql'
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {useRelayEnvironment, loadQuery, RelayEnvironmentProvider} from 'react-relay';

import AppQuery from './__generated__/AppQuery.graphql';
import Environment from './tmdb';

import { Grommet } from 'grommet';

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
      <Grommet>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Root id={12}/>
        </Suspense>
      </Grommet>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);