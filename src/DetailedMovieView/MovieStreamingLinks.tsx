import type { MovieStreamingLinks_IMovie$key } from './__generated__/MovieStreamingLinks_IMovie.graphql';

import React from 'react';
import {HStack} from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import StreamingLink from 'StreamingLink';

type Props = {
    movie: MovieStreamingLinks_IMovie$key,
}

function MovieStreamingLinks(props: Props) {
    const movie = useFragment(
        graphql`
            fragment MovieStreamingLinks_IMovie on IMovie {
                streamingOptions {
                    ...StreamingLink_StreamingOption
                }
            }
        `,
        props.movie,
    );

    if (movie.streamingOptions != null && movie.streamingOptions.length > 0) {
        return (
            <HStack align="start" spacing={4}>
                {
                    movie.streamingOptions.slice(0, 5).map((option, index) => {
                        return <StreamingLink data={option} key={`streaming_link_${index}`} />;
                    })
                }
            </HStack>
        );
    }

    return null;
}

export default MovieStreamingLinks;
