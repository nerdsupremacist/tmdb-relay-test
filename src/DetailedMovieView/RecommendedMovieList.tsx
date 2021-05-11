import type {
    RecommendedMovieList_movie$key,
} from './__generated__/RecommendedMovieList_movie.graphql';
import type { RecommendedMovieListPaginationQuery } from './__generated__/RecommendedMovieListPaginationQuery.graphql';

import React from 'react';

import { usePaginationFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import InfiniteScrollview from 'InfiniteScrollview';
import MovieListItem from 'MovieListItem';

type Props = {
    movie: RecommendedMovieList_movie$key,
}

function RecommendedMovieList(props: Props) {
    const {
        data,
        ...connection
    // eslint-disable-next-line relay/generated-flow-types
    } = usePaginationFragment<RecommendedMovieListPaginationQuery, RecommendedMovieList_movie$key>(
        graphql`
            fragment RecommendedMovieList_movie on Movie 
            @argumentDefinitions(
                count: { type: "Int!", defaultValue: 20 }
                cursor: { type: "String" }
            )
            @refetchable(queryName: "RecommendedMovieListPaginationQuery") {
                recommendations(
                    first: $count, 
                    after: $cursor
                ) @connection(key: "RecommendedMovieList_recommendations", filters: []) {
                    edges {
                        node {
                            ...MovieListItem_movie
                        }
                    }
                }
            }
        `,
        props.movie,
    );

    const movies = data.recommendations.edges?.mapNotNull(edge => edge?.node) ?? [];

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

export default RecommendedMovieList;
