import type { MovieStreamingLinks_movie$key } from './__generated__/MovieStreamingLinks_movie.graphql';

import React from 'react';
import { HStack, Link, Text } from '@chakra-ui/react';

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
                    provider {
                        __typename
                    }
                    ...StreamingLink_option
                }
            }
        `,
        props.movie,
    );

    const options = movie.streamingOptions?.filter(option => option.provider != null) ?? [];

    if (options.length > 0) {
        return (
            <>
                <HStack align="start" spacing={4}>
                    {
                        options.slice(0, 5).map((option, index) => {
                            return <StreamingLink key={`streaming_link_${index}`} option={option} />;
                        })
                    }
                </HStack>
                <Text align="right" fontSize="sm" fontWeight="light" w="100%">
                    Links powered by <Link href="">JustWatch</Link>
                </Text>
            </>
        );
    }

    return null;
}

export default MovieStreamingLinks;
