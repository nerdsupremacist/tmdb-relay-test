
import type { MovieSearchResult_movie$key } from './__generated__/MovieSearchResult_movie.graphql';

import React from 'react';
import { HStack, Image, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import MovieLinkContainer from 'MovieLinkContainer';

import { POSTER_PLACEHOLDER } from '../utils/constants';

type Props = {
    movie: MovieSearchResult_movie$key
}

function MovieSearchResult(props: Props) {
    const movie = useFragment(
        graphql`
            fragment MovieSearchResult_movie on IMovie {
                ...MovieLinkContainer_movie
                title
                overview
                poster(size: W185)
            }
        `,
        props.movie,
    );

    const poster = movie.poster ?? POSTER_PLACEHOLDER;

    return (
        <MovieLinkContainer movie={movie}>
            <HStack align="start" spacing="4">
                <Image
                    borderRadius="lg"
                    borderWidth="1px"
                    h="150px"
                    minH="150px"
                    minW="100px"
                    objectFit="cover"
                    overflow="hidden"
                    shadow="lg"
                    src={poster}
                    w="100px"
                />
                <VStack align="baseline" spacing="0">
                    <Text fontSize="md" fontWeight="bold">
                        {movie.title}
                    </Text>
                    <Text fontSize="xs" fontWeight="light">
                        {movie.overview}
                    </Text>
                </VStack>
            </HStack>
        </MovieLinkContainer>
    );
}

export default MovieSearchResult;
