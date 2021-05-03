import type {AppQuery} from './__generated__/AppQuery.graphql';

import React from 'react';

import {PreloadedQuery, usePreloadedQuery} from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';


import { Main, Box, Image } from 'grommet';

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
            overview
            poster(size: W342)
          }
        }
      }
    `,
    props.data
  );

  const movie = data.movies.movie;
  const poster = movie.poster

  return (
    <Main pad="large">
      {poster != null && 
        <Box height="small" width="small">
          <Image
            fit="contain"
            src={poster}
          />
        </Box>
      }
      <Box>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </Box>
    </Main>
  );
}

export default App;
