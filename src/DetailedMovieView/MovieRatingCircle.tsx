import type { MovieRatingCircle_movie$key } from './__generated__/MovieRatingCircle_movie.graphql';
import type { CircularProgressProps } from '@chakra-ui/react';

import React from 'react';
import { CircularProgress, CircularProgressLabel, Tooltip } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    movie: MovieRatingCircle_movie$key,
}

function MovieRatingCircle(props: Props) {
    const movie = useFragment(
        graphql`
            fragment MovieRatingCircle_movie on Movie {
                rating
                numberOfRatings
                status
            }
        `,
        props.movie,
    );

    let color: CircularProgressProps['color'];
    if (movie.rating <= 4) {
        color = 'red.600';
    } else if (movie.rating <= 6) {
        color = 'yellow.300';
    } else if (movie.rating <= 8) {
        color = 'orange.400';
    } else {
        color = 'green.600';
    }

    if (movie.status !== 'Released') {
        return null;
    }

    return (
        <CircularProgress color={color} size="50px" value={movie.rating * 10}>
            <Tooltip bg="gray.300" color="black" hasArrow label={`${movie.numberOfRatings} votes`} placement="right">
                <CircularProgressLabel>
                    {(movie.rating * 10).toFixed(0)}%
                </CircularProgressLabel>
            </Tooltip>
        </CircularProgress>
    );
}

export default MovieRatingCircle;
