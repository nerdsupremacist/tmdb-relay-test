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

import useMovieReleaseDate from 'useMovieReleaseDate';

import { POSTER_PLACEHOLDER } from 'utils/constants';

type Props = {
    movie: MovieHeader_movie$key,
}

function MovieHeader(props: Props) {
    const movie = useFragment(
        graphql`
            fragment MovieHeader_movie on Movie {
                poster(size: W185)
                title
                rating

                ...useMovieReleaseDate_movie

                runtime
                tagline
                genres {
                    ...GenreTag_genre
                }
            }
        `,
        props.movie,
    );

    const poster = movie.poster ?? POSTER_PLACEHOLDER;
    const releaseDate = useMovieReleaseDate(movie);
    const releaseYear = releaseDate?.getFullYear();

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
                <VStack align="baseline" spacing={0}>
                    <Text fontSize="3xl" fontWeight="bold">
                        {movie.title}
                    </Text>
                    <HStack divider={<Text fontSize="xl" fontWeight="light" padding={1}>·</Text>}>
                        {
                            releaseYear != null && <Text fontSize="md">
                                {releaseYear}
                            </Text>
                        }
                        <Text fontSize="md" fontWeight="light">
                            {movie.runtime} min
                        </Text>
                        <Text fontSize="md" fontWeight="light">
                            ★ {movie.rating}
                        </Text>
                    </HStack>
                </VStack>
                <Wrap spacing={2}>
                    {
                        movie.genres.map((genre, index) => {
                            return <WrapItem key={`genre_${index}`}><GenreTag data={genre} /></WrapItem>;
                        })
                    }
                </Wrap>
                <Text fontSize="md">
                    {movie.tagline}
                </Text>
            </VStack>
        </HStack>
    );
}

export default MovieHeader;
