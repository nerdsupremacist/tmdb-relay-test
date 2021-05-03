import type {AppQuery as AppQueryType} from './__generated__/AppQuery.graphql'
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {useRelayEnvironment, loadQuery, RelayEnvironmentProvider} from 'react-relay';

import AppQuery from './__generated__/AppQuery.graphql';
import Environment from './tmdb';

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
      <Suspense fallback={<h1>Loading...</h1>}>
        <Root id={12}/>
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
