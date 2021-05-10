import type { MovieParallaxBackdrop_movie$key } from './__generated__/MovieParallaxBackdrop_movie.graphql';

import React from 'react';
import { Parallax } from 'react-parallax';
import { AspectRatio, Box } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { BACKDROP_PLACEHOLDER } from 'utils/constants';

type Props = {
    movie: MovieParallaxBackdrop_movie$key,
}

function MovieParallaxBackdrop(props: Props) {
    const movie = useFragment(
        graphql`
            fragment MovieParallaxBackdrop_movie on Movie {   
                backdrop(size: Original)
            }
        `,
        props.movie,
    );

    const backdrop = movie.backdrop ?? BACKDROP_PLACEHOLDER;

    return (
        <Parallax bgImage={backdrop} strength={200}>
            <AspectRatio ratio={2.5}>
                <Box />
            </AspectRatio>
        </Parallax>
    );
}

export default MovieParallaxBackdrop;
