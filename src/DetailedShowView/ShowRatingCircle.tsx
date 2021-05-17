import type { ShowRatingCircle_show$key } from './__generated__/ShowRatingCircle_show.graphql';
import type { CircularProgressProps } from '@chakra-ui/react';

import React from 'react';
import { CircularProgress, CircularProgressLabel, Tooltip } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    show: ShowRatingCircle_show$key,
}

function ShowRatingCircle(props: Props) {
    const show = useFragment(
        graphql`
            fragment ShowRatingCircle_show on TVShow {
                status
                rating
                numberOfRatings
            }
        `,
        props.show,
    );

    let color: CircularProgressProps['color'];
    if (show.rating <= 4) {
        color = 'red.600';
    } else if (show.rating <= 6) {
        color = 'yellow.300';
    } else if (show.rating <= 8) {
        color = 'orange.400';
    } else {
        color = 'green.600';
    }

    if (show.status === 'In Production') {
        return null;
    }

    return (
        <CircularProgress color={color} size="50px" value={show.rating * 10}>
            <Tooltip bg="gray.300" color="black" hasArrow label={`${show.numberOfRatings} votes`} placement="right">
                <CircularProgressLabel>
                    {(show.rating * 10).toFixed(0)}%
                </CircularProgressLabel>
            </Tooltip>
        </CircularProgress>
    );
}

export default ShowRatingCircle;
