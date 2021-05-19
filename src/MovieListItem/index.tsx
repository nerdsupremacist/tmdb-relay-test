import type { MovieListItem_movie$key } from './__generated__/MovieListItem_movie.graphql';

import React from 'react';
import { Image, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LinkContainer from 'LinkContainer';

import { POSTER_PLACEHOLDER } from 'utils/constants';

type Props = {
    movie: MovieListItem_movie$key,
}

function MovieListItem(props: Props) {
    const movie = useFragment(
        graphql`
            fragment MovieListItem_movie on Movie {
                ...LinkContainer_node
                title
                poster(size: W154)
            }
        `,
        props.movie,
    );

    const poster = movie.poster ?? POSTER_PLACEHOLDER;

    return (
        <LinkContainer node={movie}>
            <VStack>
                <Image borderRadius="lg" h="220px" maxW="150px" minW="150px" shadow="xl" src={poster}/>
                <VStack spacing={0}>
                    <Text fontSize="sm" fontWeight="semibold" noOfLines={2} textAlign="center">{movie.title}</Text>
                </VStack>
            </VStack>
        </LinkContainer>
    );
}

export default MovieListItem;
