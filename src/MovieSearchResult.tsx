
import type { MovieSearchResult_IMovie$key } from '__generated__/MovieSearchResult_IMovie.graphql';

import React from 'react';
import { useFragment } from 'react-relay';
import { Link } from 'react-router-dom';
import { HStack, Image, Text, VStack } from '@chakra-ui/react';

import { graphql } from 'babel-plugin-relay/macro';

import { POSTER_PLACEHOLDER } from './constants';

type Props = {
    data: MovieSearchResult_IMovie$key
}

function MovieSearchResult({ data }: Props) {
    const movie = useFragment(
        graphql`
            fragment MovieSearchResult_IMovie on IMovie {    
                movieId: id
                title
                overview
                poster(size: W185)
            }
        `,
        data
    );

    const poster = movie.poster ?? POSTER_PLACEHOLDER;

    return (
        <Link to={`/movie/${movie.movieId}`}>
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
        </Link>
    );
}

export default MovieSearchResult;
