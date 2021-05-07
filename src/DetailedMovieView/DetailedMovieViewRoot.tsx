
import type { DetailedMovieViewRoot_IMovie$key } from './__generated__/DetailedMovieViewRoot_IMovie.graphql';

import React from 'react';
import {
    Container,
    HStack,
    Text,
    VStack,
} from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Cast from 'Cast';
import MovieHeader from './MovieHeader';
import MovieParallaxBackdrop from './MovieParallaxBackdrop';
import MovieStreamingLinks from './MovieStreamingLinks';
import RelatedMovie from './RelatedMovie';

import 'utils/extensions';

type Props = {
    data: DetailedMovieViewRoot_IMovie$key
}

function DetailedMovieViewRoot({ data }: Props) {
    const movie = useFragment(
        graphql`
            fragment DetailedMovieViewRoot_IMovie on IMovie {    
                ...MovieHeader_IMovie
                ...MovieStreamingLinks_IMovie

                overview

                credits {
                    ...Cast_ICreditsBasicPerson
                }

                ...MovieParallaxBackdrop_IMovie

                recommendations {
                    edges {
                        node {
                            ...RelatedMovie_IMovie
                        }
                    }
                }

                similar {
                    edges {
                        node {
                            ...RelatedMovie_IMovie
                        }
                    }
                }
            }
        `,
        data,
    );

    const recommendations = movie.recommendations.edges?.mapNotNull(edge => edge?.node) ?? [];
    const similar = movie.similar.edges?.mapNotNull(edge => edge?.node) ?? [];

    return (
        <div>
            <Container paddingBottom={8} paddingTop={8}>
                <VStack align="baseline" spacing={4}>
                    <MovieHeader movie={movie} />
                    <MovieStreamingLinks movie={movie} />
                    <Text>{movie.overview}</Text>
                    <Cast credits={movie.credits} />
                </VStack>
            </Container>
            <MovieParallaxBackdrop movie={movie} />
            <Container paddingBottom={8} paddingTop={8}>
                <VStack align="baseline" spacing={4}>
                    <Text fontSize="xl" fontWeight="bold">
                        Recommended
                    </Text>
                    <HStack align="start" maxW="100%" overflowY="scroll" padding={2}>
                        {
                            recommendations.map((movie, index) => {
                                return <RelatedMovie key={`recommended_movie_${index}`} movie={movie} />;
                            })
                        }
                    </HStack>
                    <Text fontSize="xl" fontWeight="bold">
                        Similar Movies
                    </Text>
                    <HStack align="start" maxW="100%" overflowY="scroll" padding={2}>
                        {
                            similar.map((movie, index) => {
                                return <RelatedMovie key={`similar_movie_${index}`} movie={movie} />;
                            })
                        }
                    </HStack>
                </VStack>
            </Container>
        </div>
    );
}

export default DetailedMovieViewRoot;
