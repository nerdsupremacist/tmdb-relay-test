import type {
    TopRatedMovies_data$key,
} from './__generated__/TopRatedMovies_data.graphql';
import type { TopRatedMoviesPaginationQuery } from './__generated__/TopRatedMoviesPaginationQuery.graphql';

import React from 'react';

import { usePaginationFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import InfiniteScrollview from 'InfiniteScrollview';
import MovieListItem from 'MovieListItem';

type Props = {
    data: TopRatedMovies_data$key,
}

function TopRatedMovies(props: Props) {
    // eslint-disable-next-line relay/generated-flow-types
    const { data, ...connection } = usePaginationFragment<TopRatedMoviesPaginationQuery, TopRatedMovies_data$key>(
        graphql`
            fragment TopRatedMovies_data on Query 
            @argumentDefinitions(
                count: { type: "Int!", defaultValue: 20 }
                cursor: { type: "String" }
            )
            @refetchable(queryName: "TopRatedMoviesPaginationQuery") {
                movies {
                    topRated(first: $count, after: $cursor) @connection(key: "TopRatedMovies_topRated", filters: []) {
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

    const movies = data.movies.topRated.edges?.compactMap(edge => edge?.node) ?? [];

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

export default TopRatedMovies;
