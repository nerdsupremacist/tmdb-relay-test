import type { RelatedMovie_movie$key } from './__generated__/RelatedMovie_movie.graphql';
import type { Disposable } from 'relay-runtime';

import React from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { HStack } from '@chakra-ui/layout';

import Placeholder from 'LoadingSuspense/Placeholder';
import RelatedMovie from './RelatedMovie';

type Props = {
    movies: RelatedMovie_movie$key[],
    error: Error | null,
    hasMore: boolean,
    isLoading: boolean,
    loadMore: () => Disposable,
}

function RelatedMovieList({ movies, error, hasMore, isLoading, loadMore }: Props) {
    const [lastItemRef] = useInfiniteScroll({
        disabled: error != null,

        hasNextPage: hasMore,

        loading: isLoading,
        
        onLoadMore: loadMore,
    });

    return (
        <HStack align="start" maxW="100%" overflowY="scroll" padding={2}>
            {
                movies.map((movie, index) => {
                    return <RelatedMovie key={`related_movie_${index}`} movie={movie} />;
                })
            }
            {(isLoading || hasMore) && (
                <div ref={lastItemRef}>
                    <Placeholder />
                </div>
            )}
        </HStack>
    );
}

export default RelatedMovieList;
