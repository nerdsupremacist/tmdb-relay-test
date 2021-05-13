import type {
    TrendingMovies_data$key,
} from './__generated__/TrendingMovies_data.graphql';
import type { TrendingMoviesPaginationQuery } from './__generated__/TrendingMoviesPaginationQuery.graphql';

import React from 'react';

import { usePaginationFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import InfiniteScrollview from 'InfiniteScrollview';
import MovieListItem from 'MovieListItem';

type Props = {
    data: TrendingMovies_data$key,
}

function TrendingMovies(props: Props) {
    // eslint-disable-next-line relay/generated-flow-types
    const { data, ...connection } = usePaginationFragment<TrendingMoviesPaginationQuery, TrendingMovies_data$key>(
        graphql`
            fragment TrendingMovies_data on Query 
            @argumentDefinitions(
                count: { type: "Int!", defaultValue: 20 }
                cursor: { type: "String" }
            )
            @refetchable(queryName: "TrendingMoviesPaginationQuery") {
                movies {
                    trending(first: $count, after: $cursor) @connection(key: "TrendingMovies_trending", filters: []) {
                        edges {
                            node {
                                ...MovieListItem_movie
                            }
                        }
                    }
                }
            }
        `,
        props.data,
    );

    const movies = data.movies.trending.edges?.mapNotNull(edge => edge?.node) ?? [];

    return (
        <InfiniteScrollview
            align="start"
            maxW="100%"
            padding={2}
            scrollDirection="horizontal"
            {...connection}
        >
            {movies.map((movie, index) => <MovieListItem key={`similar_movie_${index}`} movie={movie}/>)}
        </InfiniteScrollview>
    );
}

export default TrendingMovies;
