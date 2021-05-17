import type { ShowStreamingLinks_show$key } from './__generated__/ShowStreamingLinks_show.graphql';

import React from 'react';
import { HStack, Link, Text } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import StreamingLink from 'StreamingLink';

type Props = {
    show: ShowStreamingLinks_show$key,
}

function ShowStreamingLinks(props: Props) {
    const show = useFragment(
        graphql`
            fragment ShowStreamingLinks_show on TVShow {
                streamingOptions {
                    provider {
                        __typename
                    }
                    ...StreamingLink_option
                }
            }
        `,
        props.show,
    );

    const options = show.streamingOptions?.filter(option => option.provider != null) ?? [];

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

export default ShowStreamingLinks;
