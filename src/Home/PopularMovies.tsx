import type { PopularMovies_data$key } from './__generated__/PopularMovies_data.graphql';
import type { PopularMoviesPaginationQuery } from './__generated__/PopularMoviesPaginationQuery.graphql';

import React from 'react';

import { usePaginationFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import InfiniteScrollview from 'InfiniteScrollview';
import MovieListItem from 'MovieListItem';

type Props = {
    data: PopularMovies_data$key,
}

function PopularMovies(props: Props) {
    const {
        data,
        ...connection
    // eslint-disable-next-line relay/generated-flow-types
    } = usePaginationFragment<PopularMoviesPaginationQuery, PopularMovies_data$key>(
        graphql`
            fragment PopularMovies_data on Query
            @argumentDefinitions(
                count: { type: "Int!", defaultValue: 20 }
                cursor: { type: "String" }
            )
            @refetchable(queryName: "PopularMoviesPaginationQuery") {
                movies {
                    popular(first: $count, after: $cursor) @connection(key: "PopularMovies_data_movies_popular") {
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

    const nodes = data.movies.popular.edges?.compactMap(edge => edge?.node) ?? [];

    return (
        <InfiniteScrollview
            align="start"
            maxW="100%"
            padding={2}
            scrollDirection="horizontal"
            {...connection}
        >
            {nodes.map((movie, index) => <MovieListItem key={`popular_MovieListItem_${index}`} movie={movie}/>)}
        </InfiniteScrollview>
    );
}

export default PopularMovies;
