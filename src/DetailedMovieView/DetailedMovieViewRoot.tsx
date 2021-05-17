
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
import Crew from 'Crew';
import StreamingLinks from 'StreamingLinks';
import MovieHeader from './MovieHeader';
import MovieParallaxBackdrop from './MovieParallaxBackdrop';
import RecommendedMovieList from './RecommendedMovieList';
import SimilarMovieList from './SimilarMovieList';

type Props = {
    movie: DetailedMovieViewRoot_movie$key
}

function DetailedMovieViewRoot(props: Props) {
    const movie = useFragment(
        graphql`
            fragment DetailedMovieViewRoot_movie on Movie {    
                ...MovieHeader_movie
                streamingOptions {
                    ...StreamingLinks_links
                }

                overview

                credits {
                    cast {
                        ...Cast_credits
                    }
                    crew {
                        ...Crew_credits
                    }
                }

                ...MovieParallaxBackdrop_movie
                ...SimilarMovieList_movie @arguments(count: 20, cursor: null)
                ...RecommendedMovieList_movie @arguments(count: 20, cursor: null)
            }
        `,
        props.movie,
    );

    return (
        <div>
            <Container maxW="container.sm" paddingBottom={8} paddingTop={8}>
                <VStack align="baseline" spacing={4}>
                    <MovieHeader movie={movie} />
                    {
                        movie.streamingOptions != null && (
                            <StreamingLinks links={movie.streamingOptions} />
                        )
                    }
                    <Text>{movie.overview}</Text>
                    <Text fontSize="xl" fontWeight="bold">
                        Cast
                    </Text>
                    <Cast credits={movie.credits.cast} />
                </VStack>
            </Container>
            <MovieParallaxBackdrop movie={movie} />
            <Container maxW="container.md" paddingBottom={8} paddingTop={8}>
                <VStack align="baseline" spacing={4}>
                    <RecommendedMovieList movie={movie} />
                    
                    <Text fontSize="xl" fontWeight="bold">
                        Crew
                    </Text>
                    <Crew credits={movie.credits.crew}/>

                    <SimilarMovieList movie={movie} />
                </VStack>
            </Container>
        </div>
    );
}

export default DetailedMovieViewRoot;
