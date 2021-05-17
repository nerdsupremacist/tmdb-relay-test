import type { StreamingLinks_links$key } from './__generated__/StreamingLinks_links.graphql';

import React from 'react';
import { HStack, Link, Text } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import StreamingLink from 'StreamingLink';

type Props = {
    links: StreamingLinks_links$key,
}

function StreamingLinks(props: Props) {
    const links = useFragment(
        graphql`
            fragment StreamingLinks_links on StreamingOption @relay(plural: true) {
                provider {
                    __typename
                }
                ...StreamingLink_option
            }
        `,
        props.links,
    );

    const options = links.filter(option => option.provider != null) ?? [];

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

export default StreamingLinks;
