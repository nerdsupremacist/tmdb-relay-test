import type {
    RecommendedMovieList_movie$key,
} from './__generated__/RecommendedMovieList_movie.graphql';
import type { RecommendedMovieListPaginationQuery } from './__generated__/RecommendedMovieListPaginationQuery.graphql';

import React from 'react';
import { Text } from '@chakra-ui/react';

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
                    totalCount
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

    if (data.recommendations.totalCount < 1) {
        return null;
    }

    const movies = data.recommendations.edges?.compactMap(edge => edge?.node) ?? [];

    return (
        <>
            <Text fontSize="xl" fontWeight="bold">
                Recommended Movies
            </Text>
            <InfiniteScrollview
                align="start"
                maxW="100%"
                padding={2}
                scrollDirection="horizontal"
                {...connection}
            >
                {movies.map((movie, index) => <MovieListItem key={`similar_movie_${index}`} movie={movie}/>)}
            </InfiniteScrollview>
        </>
    );
}

export default RecommendedMovieList;
