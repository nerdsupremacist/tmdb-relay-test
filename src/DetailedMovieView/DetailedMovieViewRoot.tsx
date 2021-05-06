
import type { DetailedMovieViewRoot_IMovie$key } from './__generated__/DetailedMovieViewRoot_IMovie.graphql';

import React from 'react';
import { Parallax } from 'react-parallax';
import {
    AspectRatio,
    Box,
    Container,
    HStack,
    Image,
    Text,
    VStack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import StreamingLink from 'StreamingLink';
import CastCredit from './CastCredit';
import GenreTag from './GenreTag';

import { BACKDROP_PLACEHOLDER, POSTER_PLACEHOLDER } from 'utils/constants';

type Props = {
    data: DetailedMovieViewRoot_IMovie$key
}

function DetailedMovieViewRoot({ data }: Props) {
    const movie = useFragment(
        graphql`
            fragment DetailedMovieViewRoot_IMovie on IMovie {    
                title
                rating
                overview

                details {
                    runtime
                    tagline
                    genres {
                        ...GenreTag_Genre
                    }
                }

                credits {
                    cast {
                        ...CastCredit_CastCreditBasicPerson
                    }
                }

                streamingOptions {
                    ...StreamingLink_StreamingOption
                }

                poster(size: W185)
                backdrop(size: Original)
            }
        `,
        data,
    );

    const poster = movie.poster ?? POSTER_PLACEHOLDER;
    const backdrop = movie.backdrop ?? BACKDROP_PLACEHOLDER;

    return (
        <div>
            <Container paddingBottom={8} paddingTop={8}>
                <VStack align="baseline" spacing={4}>
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
                                {movie.details.genres.map((genre, index) => <WrapItem key={`genre_${index}`}><GenreTag data={genre} /></WrapItem>)}
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
                    {movie.streamingOptions != null && movie.streamingOptions.length > 0 &&
                        <HStack align="start" spacing={4}>
                            {movie.streamingOptions.slice(0, 5).map((option, index) => <StreamingLink data={option} key={`streaming_link_${index}`} />)}
                        </HStack>
                    }
                    <Text>{movie.overview}</Text>
                    <HStack align="start" maxW="100%" overflowY="scroll" padding={2}>
                        {movie.credits.cast.map((credit, index) => <CastCredit data={credit} key={`cast_credit_${index}`} />)}
                    </HStack>
                </VStack>
            </Container>
            <Parallax bgImage={backdrop} strength={200}>
                <AspectRatio ratio={2.5}>
                    <Box />
                </AspectRatio>
            </Parallax>
            <Container paddingBottom={8} paddingTop={8}>
                <p>{movie.overview}</p>
                <p>{movie.overview}</p>
                <p>{movie.overview}</p>
                <p>{movie.overview}</p>
                <p>{movie.overview}</p>
                <p>{movie.overview}</p>
                <p>{movie.overview}</p>
                <p>{movie.overview}</p>
                <p>{movie.overview}</p>
                <p>{movie.overview}</p>
                <p>{movie.overview}</p>
                <p>{movie.overview}</p>
                <p>{movie.overview}</p>
                <p>{movie.overview}</p>
                <p>{movie.overview}</p>
                <p>{movie.overview}</p>
            </Container>
        </div>
    );
}

export default DetailedMovieViewRoot;
