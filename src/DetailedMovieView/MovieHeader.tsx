import type { MovieHeader_movie$key } from './__generated__/MovieHeader_movie.graphql';

import React from 'react';
import {
    Badge,
    HStack,
    Image,
    Text,
    VStack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import GenreTag from 'GenreTag';
import MovieRatingCircle from './MovieRatingCircle';

import useMovieReleaseDate from 'useMovieReleaseDate';
import useMovieStatus from './useMovieStatus';

import { POSTER_PLACEHOLDER } from 'utils/constants';

type Props = {
    movie: MovieHeader_movie$key,
}

function MovieHeader(props: Props) {
    const movie = useFragment(
        graphql`
            fragment MovieHeader_movie on Movie {
                poster(size: W342)
                title
                
                ...MovieRatingCircle_movie
                ...useMovieStatus_movie
                ...useMovieReleaseDate_movie

                runtime
                tagline
                genres {
                    ...GenreTag_genre
                }
                productionCompanies {
                    name
                }
            }
        `,
        props.movie,
    );

    const poster = movie.poster ?? POSTER_PLACEHOLDER;
    const status = useMovieStatus(movie);
    const releaseDate = useMovieReleaseDate(movie);
    const releaseYear = releaseDate?.getFullYear();

    return (
        <HStack align="flex-end" spacing={4}>
            <Image
                borderRadius="lg"
                borderWidth="1px"
                maxW="200"
                minW="100"
                objectFit="cover"
                overflow="hidden"
                shadow="xl"
                src={poster}
            />
            <VStack align="baseline" spacing={2}>
                <VStack align="baseline" spacing={0}>
                    <MovieRatingCircle movie={movie} />
                    {status != null && (
                        <Badge borderRadius="xl" colorScheme={status[1]} px="2">
                            {status[0]}
                        </Badge>
                    )}
                    <Text fontSize="3xl" fontWeight="bold">
                        {movie.title}
                    </Text>
                    <HStack divider={<Text fontSize="xl" fontWeight="light" padding={1}>·</Text>}>
                        {
                            releaseYear != null && <Text fontSize="md">
                                {releaseYear}
                            </Text>
                        }
                        {
                            movie.runtime > 0 && <Text fontSize="md" fontWeight="light">
                                {movie.runtime} min
                            </Text>
                        }
                        {movie.productionCompanies.length > 0 && <Text fontSize="md" fontWeight="light">
                            {movie.productionCompanies[0].name}
                        </Text>}
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
