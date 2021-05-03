import type {AppQuery} from './__generated__/AppQuery.graphql';

import React from 'react';

import {PreloadedQuery, usePreloadedQuery} from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import DetailedMovieView from './DetailedMovieView';

type Props = {
  data : PreloadedQuery<AppQuery>
}

function App(props: Props) {
  const data = usePreloadedQuery<AppQuery>(
    graphql`
      query AppQuery($id: Int!) {
        movies {
          movie(id: $id) {
            ...DetailedMovieView_Movie
          }
        }
      }
    `,
    props.data
  );

  return (
    <DetailedMovieView data={data.movies.movie}/>
  );
}

export default App;
