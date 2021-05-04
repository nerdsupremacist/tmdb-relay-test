import type { DetailedMovieViewRoot_IMovie$key } from './__generated__/DetailedMovieViewRoot_IMovie.graphql';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { Container, Box, HStack, VStack, Image, Text } from "@chakra-ui/react"
import { Parallax } from 'react-parallax'

import StreamingLink from './StreamingLink';

import { BACKDROP_PLACEHOLDER, POSTER_PLACEHOLDER } from './constants';

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
                    status
                    runtime
                    tagline
                }

                streamingOptions {
                    ...StreamingLink_StreamingOption
                }

                poster(size: W185)
                backdrop(size: W780)
            }
        `,
        data
    );

    const poster = movie.poster ?? POSTER_PLACEHOLDER;
    const backdrop = movie.backdrop ?? BACKDROP_PLACEHOLDER;

    return (
        <div>
            <Container paddingTop={8} paddingBottom={8}>
                <VStack align="baseline" spacing="4">
                    <HStack align="flex-end" spacing="4">
                        <Image
                            maxW="150"
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            objectFit="cover"
                            src={poster}
                            shadow="lg"
                        />
                        <VStack align="baseline" spacing="0">
                            <Text fontSize="3xl">
                                {movie.title}
                            </Text>
                            <Text fontSize="md">
                                {movie.details.tagline}
                            </Text>
                            <HStack>
                                <Text fontSize="md" fontWeight="light">
                                    {movie.details.runtime} min
                                </Text>
                                <Text fontSize="md" fontWeight="light">
                                    {movie.rating}
                                </Text>
                            </HStack>
                        </VStack>
                    </HStack>
                    {movie.streamingOptions != null && movie.streamingOptions.length > 0 &&
                        <HStack align="start" spacing="4">
                            {movie.streamingOptions.slice(0, 5).map((option, index) => <StreamingLink data={option} key={`streaming_link_${index}`} />)}
                        </HStack>
                    }
                    <Text>{movie.overview}</Text>
                </VStack>
            </Container>
            <Parallax bgImage={backdrop} strength={200}>
                <Box minH={500} />
            </Parallax>
            <Container paddingTop={8} paddingBottom={8}>
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
