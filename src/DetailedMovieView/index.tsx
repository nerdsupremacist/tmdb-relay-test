
import type { DetailedMovieViewQuery as DetailedMovieViewQueryType } from './__generated__/DetailedMovieViewQuery.graphql';

import DetailedMovieViewQuery from './__generated__/DetailedMovieViewQuery.graphql';

import React from 'react';
import { loadQuery, PreloadedQuery, usePreloadedQuery, useRelayEnvironment } from 'react-relay';
import { useParams } from 'react-router';

import { graphql } from 'babel-plugin-relay/macro';

import LoadingSuspense from 'LoadingSuspense';
import DetailedMovieViewRoot from './DetailedMovieViewRoot';

type LoadedProps = {
    data: PreloadedQuery<DetailedMovieViewQueryType>
}

type Params = {
    id: string
}

function DetailedMovieView(props: LoadedProps) {
    const data = usePreloadedQuery(
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
        <DetailedMovieViewRoot data={data.movies.movie} />
    );
}

function DetailedMovieViewWrapper() {
    const { id } = useParams<Params>();
    const environment = useRelayEnvironment();
    const data = loadQuery<DetailedMovieViewQueryType>(environment, DetailedMovieViewQuery, { id: parseInt(id) })

    return (
        <LoadingSuspense>
            <DetailedMovieView data={data} />
        </LoadingSuspense>
    );
}

export default DetailedMovieViewWrapper;