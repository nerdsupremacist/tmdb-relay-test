import type { RelatedMovie_IMovie$key } from './__generated__/RelatedMovie_IMovie.graphql';

import React from 'react';
import { Image, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { POSTER_PLACEHOLDER } from 'utils/constants';

type Props = {
    movie: RelatedMovie_IMovie$key,
}

function RelatedMovie(props: Props) {
    const movie = useFragment(
        graphql`
            fragment RelatedMovie_IMovie on IMovie {
                title
                poster(size: W154)
            }
        `,
        props.movie,
    );

    const poster = movie.poster ?? POSTER_PLACEHOLDER;

    return (
        <VStack>
            <Image borderRadius="lg" h="220px" maxW="150px" minW="150px" shadow="lg" src={poster}/>
            <VStack spacing={0}>
                <Text fontSize="sm" fontWeight="semibold" noOfLines={2} textAlign="center">{movie.title}</Text>
            </VStack>
        </VStack>
    );
}

export default RelatedMovie;
