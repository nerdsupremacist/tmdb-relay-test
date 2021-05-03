import type { DetailedMovieView_Movie$key } from './__generated__/DetailedMovieView_Movie.graphql';

import React from 'react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { Container, Box, HStack, VStack, Image, Text } from "@chakra-ui/react"
import { Parallax } from 'react-parallax'

type Props = {
    data: DetailedMovieView_Movie$key
}

function DetailedMovieView({ data }: Props) {
    const movie = useFragment(
        graphql`
            fragment DetailedMovieView_Movie on IMovie {    
                title
                overview
                poster(size: W185)
                backdrop(size: W780)
            }
        `,
        data
    );

    const poster = movie.poster;
    const backdrop = movie.backdrop ?? 'https://images.squarespace-cdn.com/content/v1/5654cc6fe4b0488d60d5dc01/1544716196527-OHO03UMM2AZU40NUWSCH/ke17ZwdGBToddI8pDm48kD1yN0uFJUyVk4ibNWq9ENR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaOzcJcQQrnGXSaWdGE3THqmx0EMHKq8QenG6Ku3AHaP-qQ4l0NiHD0R2mXKYnqdmA/Bergen+bokeh';

    return (
        <div>
            <Parallax bgImage={backdrop} strength={200}>
                <Box minH={500} />
            </Parallax>
            <Container paddingTop={8}>
                <HStack align="baseline" spacing="4">
                    {poster != null &&
                        <Image
                            maxW="150"
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            objectFit="cover"
                            src={poster}
                            shadow="lg"
                        />
                    }
                    <VStack>
                        <Text fontSize="3xl">
                            {movie.title}
                        </Text>
                    </VStack>
                </HStack>
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

export default DetailedMovieView;
