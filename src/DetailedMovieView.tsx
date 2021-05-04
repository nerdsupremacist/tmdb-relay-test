import type {DetailedMovieViewQuery as DetailedMovieViewQueryType } from './__generated__/DetailedMovieViewQuery.graphql';

import DetailedMovieViewQuery from './__generated__/DetailedMovieViewQuery.graphql';

import React, {Suspense} from 'react';

import {PreloadedQuery, usePreloadedQuery, loadQuery, useRelayEnvironment} from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { useParams } from 'react-router-dom';

import DetailedMovieViewRoot from './DetailedMovieViewRoot';
import Placeholder from './Placeholder';

type LoadedProps = {
  data : PreloadedQuery<DetailedMovieViewQueryType>
}

type Params = {
    id: string
}

function DetailedMovieViewLoaded(props: LoadedProps) {
  const data = usePreloadedQuery<DetailedMovieViewQueryType>(
    graphql`
      query DetailedMovieViewQuery($id: Int!) {
        movies {
          movie(id: $id) {
            ...DetailedMovieViewRoot_IMovie
          }
        }
      }
    `,
    props.data
  );

  return (
    <DetailedMovieViewRoot data={data.movies.movie}/>
  );
}

function DetailedMovieView() {
    const { id } = useParams<Params>();
    const environment = useRelayEnvironment();

    const data = loadQuery<DetailedMovieViewQueryType>(environment, DetailedMovieViewQuery, { id : parseInt(id) })

    return (
        <Suspense fallback={<Placeholder />}>
            <DetailedMovieViewLoaded data={data}/>
        </Suspense>
    );
  }

export default DetailedMovieView;
