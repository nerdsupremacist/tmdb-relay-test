
import type { DetailedMovieViewRoot_movie$key } from './__generated__/DetailedMovieViewRoot_movie.graphql';

import React from 'react';
import {
    Container,
    Text,
    VStack,
} from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Cast from 'Cast';
import MovieHeader from './MovieHeader';
import MovieParallaxBackdrop from './MovieParallaxBackdrop';
import MovieStreamingLinks from './MovieStreamingLinks';
import RelatedMovieList from './RelatedMovieList';

type Props = {
    movie: DetailedMovieViewRoot_movie$key
}

function DetailedMovieViewRoot(props: Props) {
    const movie = useFragment(
        graphql`
            fragment DetailedMovieViewRoot_movie on IMovie {    
                ...MovieHeader_movie
                ...MovieStreamingLinks_movie

                overview

                credits {
                    ...Cast_credits
                }

                ...MovieParallaxBackdrop_movie

                recommendations {
                    ...RelatedMovieList_connection
                }

                similar {
                    ...RelatedMovieList_connection
                }
            }
        `,
        props.movie,
    );

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
                    <RelatedMovieList connection={movie.recommendations} />
                    <Text fontSize="xl" fontWeight="bold">
                        Similar Movies
                    </Text>
                    <RelatedMovieList connection={movie.similar} />
                </VStack>
            </Container>
        </div>
    );
}

export default DetailedMovieViewRoot;
