
import type { MovieSearchResult_movie$key } from './__generated__/MovieSearchResult_movie.graphql';

import React from 'react';
import { HStack, Image, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LinkContainer from 'LinkContainer';
import { useOnClickOnResults } from './SearchContext';

import { POSTER_PLACEHOLDER } from 'utils/constants';

type Props = {
    movie: MovieSearchResult_movie$key,
}

function MovieSearchResult(props: Props) {
    const onClick = useOnClickOnResults();
    const movie = useFragment(
        graphql`
            fragment MovieSearchResult_movie on Movie {
                ...LinkContainer_node
                title
                overview
                poster(size: W185)
            }
        `,
        props.movie,
    );

    const poster = movie.poster ?? POSTER_PLACEHOLDER;

    return (
        <LinkContainer node={movie} onClick={onClick}>
            <HStack align="start" spacing={4}>
                <Image
                    borderRadius="lg"
                    borderWidth="1px"
                    h="150px"
                    minH="150px"
                    minW="100px"
                    objectFit="cover"
                    overflow="hidden"
                    shadow="xl"
                    src={poster}
                    w="100px"
                />
                <VStack align="baseline" spacing="0">
                    <Text fontSize="md" fontWeight="bold">
                        {movie.title}
                    </Text>
                    <Text fontSize="xs" fontWeight="light" noOfLines={4}>
                        {movie.overview}
                    </Text>
                </VStack>
            </HStack>
        </LinkContainer>
    );
}

export default MovieSearchResult;
