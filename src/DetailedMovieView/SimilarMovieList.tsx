import type {
    SimilarMovieList_movie$key,
} from './__generated__/SimilarMovieList_movie.graphql';
import type { SimilarMovieListPaginationQuery } from './__generated__/SimilarMovieListPaginationQuery.graphql';

import React from 'react';

import { usePaginationFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import RelatedMovieList from './RelatedMovieList';

type Props = {
    movie: SimilarMovieList_movie$key,
}

function SimilarMovieList(props: Props) {
    const {
        data,
        hasNext,
        isLoadingNext,
        loadNext,
    // eslint-disable-next-line relay/generated-flow-types
    } = usePaginationFragment<SimilarMovieListPaginationQuery, SimilarMovieList_movie$key>(
        graphql`
            fragment SimilarMovieList_movie on Movie 
            @argumentDefinitions(
                count: { type: "Int!" }
                cursor: { type: "String" }
            )
            @refetchable(queryName: "SimilarMovieListPaginationQuery") {
                similar(first: $count, after: $cursor) @connection(key: "SimilarMovieList_movie_similar") {
                    edges {
                        node {
                            # eslint-disable-next-line relay/must-colocate-fragment-spreads
                            ...RelatedMovie_movie
                        }
                    }
                }
            }
        `,
        props.movie,
    );

    const movies = data.similar.edges?.mapNotNull(edge => edge?.node) ?? [];

    return (
        <RelatedMovieList
            error={null}
            hasMore={hasNext}
            isLoading={isLoadingNext}
            loadMore={() => loadNext(20)}
            movies={movies}
        />
    );
}

export default SimilarMovieList;
