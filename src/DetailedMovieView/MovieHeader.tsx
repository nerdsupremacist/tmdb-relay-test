import type { MovieHeader_movie$key } from './__generated__/MovieHeader_movie.graphql';

import React from 'react';
import {
    HStack,
    Image,
    Text,
    VStack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import GenreTag from './GenreTag';

import { POSTER_PLACEHOLDER } from 'utils/constants';

type Props = {
    movie: MovieHeader_movie$key,
}

function MovieHeader(props: Props) {
    const movie = useFragment(
        graphql`
            fragment MovieHeader_movie on IMovie {
                poster(size: W185)
                title
                rating

                details {
                    runtime
                    tagline
                    genres {
                        ...GenreTag_genre
                    }
                }
            }
        `,
        props.movie,
    );

    const poster = movie.poster ?? POSTER_PLACEHOLDER;

    return (
        <HStack align="flex-end" spacing={4}>
            <Image
                borderRadius="lg"
                borderWidth="1px"
                maxW="150"
                objectFit="cover"
                overflow="hidden"
                shadow="lg"
                src={poster}
            />
            <VStack align="baseline" spacing={2}>
                <Text fontSize="3xl" fontWeight="bold">
                    {movie.title}
                </Text>
                <Wrap spacing={2}>
                    {
                        movie.details.genres.map((genre, index) => {
                            return <WrapItem key={`genre_${index}`}><GenreTag data={genre} /></WrapItem>;
                        })
                    }
                </Wrap>
                <VStack align="baseline" spacing={0}>
                    <Text fontSize="md">
                        {movie.details.tagline}
                    </Text>
                    <HStack>
                        <Text fontSize="md" fontWeight="light">
                            {movie.details.runtime} min
                        </Text>
                        <Text fontSize="md" fontWeight="light">
                            {movie.rating} ★
                        </Text>
                    </HStack>
                </VStack>
            </VStack>
        </HStack>
    );
}

export default MovieHeader;
