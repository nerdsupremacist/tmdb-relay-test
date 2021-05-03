import type {AppQuery} from './__generated__/AppQuery.graphql';

import React from 'react';
import './App.css';

import {PreloadedQuery, usePreloadedQuery} from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
  data : PreloadedQuery<AppQuery>
}

function App(props: Props) {
  const data = usePreloadedQuery<AppQuery>(
    graphql`
      query AppQuery($id: Int!) {
        movies {
          movie(id: $id) {
            title
          }
        }
      }
    `,
    props.data
  );

  const title = data.movies.movie.title;

  return (
    <h1>{title}</h1>
  );
}

export default App;
