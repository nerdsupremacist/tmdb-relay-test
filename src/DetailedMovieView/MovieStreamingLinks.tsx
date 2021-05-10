import type { MovieStreamingLinks_movie$key } from './__generated__/MovieStreamingLinks_movie.graphql';

import React from 'react';
import { HStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import StreamingLink from 'StreamingLink';

type Props = {
    movie: MovieStreamingLinks_movie$key,
}

function MovieStreamingLinks(props: Props) {
    const movie = useFragment(
        graphql`
            fragment MovieStreamingLinks_movie on Movie {
                streamingOptions {
                    ...StreamingLink_option
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
                        return <StreamingLink key={`streaming_link_${index}`} option={option} />;
                    })
                }
            </HStack>
        );
    }

    return null;
}

export default MovieStreamingLinks;
