
import type {
    DetailedMovieViewQuery as DetailedMovieViewQueryType,
} from './__generated__/DetailedMovieViewQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';

import DetailedMovieViewQuery from './__generated__/DetailedMovieViewQuery.graphql';

import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router';

import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from 'react-relay';
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
            query DetailedMovieViewQuery($id: ID!) {
                movies {
                    movie(id: $id) {
                        ...DetailedMovieViewRoot_movie
                    }
                }
            }
        `,
        props.data,
    );

    return (
        <DetailedMovieViewRoot movie={data.movies.movie} />
    );
}

function DetailedMovieViewWrapper() {
    const { id } = useParams<Params>();
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<DetailedMovieViewQueryType>(DetailedMovieViewQuery);

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        error.current?.reset();
        loadQuery({ id });
        return () => {
            dispose();
        };
    }, [id, dispose, loadQuery]);

    return (
        <LoadingSuspense boundaryRef={error}>
            {data != null && <DetailedMovieView data={data}/>}
        </LoadingSuspense>
    );
}

export default DetailedMovieViewWrapper;
