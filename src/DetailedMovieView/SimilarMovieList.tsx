import type {
    SimilarMovieList_movie$key,
} from './__generated__/SimilarMovieList_movie.graphql';
import type { SimilarMovieListPaginationQuery } from './__generated__/SimilarMovieListPaginationQuery.graphql';

import React from 'react';
import { Text } from '@chakra-ui/react';

import { usePaginationFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import InfiniteScrollview from 'InfiniteScrollview';
import MovieListItem from 'MovieListItem';

type Props = {
    movie: SimilarMovieList_movie$key,
}

function SimilarMovieList(props: Props) {
    // eslint-disable-next-line relay/generated-flow-types
    const { data, ...connection } = usePaginationFragment<SimilarMovieListPaginationQuery, SimilarMovieList_movie$key>(
        graphql`
            fragment SimilarMovieList_movie on Movie 
            @argumentDefinitions(
                count: { type: "Int!", defaultValue: 20 }
                cursor: { type: "String" }
            )
            @refetchable(queryName: "SimilarMovieListPaginationQuery") {
                similar(first: $count, after: $cursor) @connection(key: "SimilarMovieList_similar", filters: []) {
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

    if (data.similar.totalCount < 1) {
        return null;
    }

    const movies = data.similar.edges?.compactMap(edge => edge?.node) ?? [];

    return (
        <>
            <Text fontSize="xl" fontWeight="bold">
                        Similar Movies
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

export default SimilarMovieList;
