import type { NowPlayingMovies_data$key } from './__generated__/NowPlayingMovies_data.graphql';
import type { NowPlayingMoviesPaginationQuery } from './__generated__/NowPlayingMoviesPaginationQuery.graphql';

import React from 'react';

import { usePaginationFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import InfiniteScrollview from 'InfiniteScrollview';
import MovieListItem from 'MovieListItem';

type Props = {
    data: NowPlayingMovies_data$key,
}

function NowPlayingMovies(props: Props) {
    const {
        data,
        ...connection
    // eslint-disable-next-line relay/generated-flow-types
    } = usePaginationFragment<NowPlayingMoviesPaginationQuery, NowPlayingMovies_data$key>(
        graphql`
            fragment NowPlayingMovies_data on Query
            @argumentDefinitions(
                count: { type: "Int!", defaultValue: 20 }
                cursor: { type: "String" }
            )
            @refetchable(queryName: "NowPlayingMoviesPaginationQuery") {
                movies {
                    nowPlaying(first: $count, after: $cursor) 
                    @connection(key: "NowPlayingMovies_data_movies_nowPlaying") {
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

    const nodes = data.movies.nowPlaying.edges?.compactMap(edge => edge?.node) ?? [];

    return (
        <InfiniteScrollview
            align="start"
            maxW="100%"
            padding={2}
            scrollDirection="horizontal"
            {...connection}
        >
            {nodes.map((movie, index) => <MovieListItem key={`movies_MovieListItem_${index}`} movie={movie}/>)}
        </InfiniteScrollview>
    );
}

export default NowPlayingMovies;
