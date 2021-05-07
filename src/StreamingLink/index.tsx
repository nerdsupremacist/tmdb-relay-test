
import type { StreamingLink_option$key } from './__generated__/StreamingLink_option.graphql';

import React from 'react';
import { Image, Link, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import useStreamingLinkPriceDescription from './useStreamingLinkPriceDescription';
import useStreamingLinkTitle from './useStreamingLinkTitle';

type Props = {
    option: StreamingLink_option$key
}

function StreamingLink(props: Props) {
    const option = useFragment(
        graphql`
            fragment StreamingLink_option on StreamingOption {
                provider {
                    iconURL
                }
                bestOffering {
                    links {
                        web
                    }
                    ...useStreamingLinkTitle_offering
                    ...useStreamingLinkPriceDescription_offering
                }
            }
        `,
        props.option,
    );

    const title = useStreamingLinkTitle(option.bestOffering);
    const priceDescription = useStreamingLinkPriceDescription(option.bestOffering);

    if (option.provider == null) {
        return null;
    }

    return (
        <Link href={option.bestOffering.links.web} textAlign="center">
            <VStack align="center" spacing="0">
                <Image
                    borderRadius="xl"
                    borderWidth="1px"
                    maxW="50"
                    shadow="lg"
                    src={option.provider.iconURL}
                />
                <Text fontSize="sm" fontWeight="semibold" paddingTop="2">
                    {title}
                </Text>
                <Text fontSize="sm" fontWeight="light">
                    {priceDescription}
                </Text>
            </VStack>
        </Link>
    );
}

export default StreamingLink;
