
import type { StreamingLink_option$key } from './__generated__/StreamingLink_option.graphql';

import React from 'react';
import { Image, Link, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import StreamingLinkToolTip from './StreamingLinkToolTip';

import useStreamingLinkPriceDescription from './useStreamingLinkPriceDescription';
import useStreamingLinkTitle from './useStreamingLinkTitle';

type Props = {
    option: StreamingLink_option$key
}

function StreamingLink(props: Props) {
    const option = useFragment(
        graphql`
            fragment StreamingLink_option on StreamingOption {
                ...StreamingLinkToolTip_option
                
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

    if (option.provider == null || option.bestOffering.links.web == null) {
        return null;
    }

    return (
        <StreamingLinkToolTip option={option}>
            <Link
                href={option.bestOffering.links.web}
                style={{
                    textDecoration: 'none',
                }}
                textAlign="center"
            >
                <VStack align="center" spacing="0">
                    <Image
                        borderRadius="xl"
                        borderWidth="1px"
                        maxW="50"
                        shadow="xl"
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
        </StreamingLinkToolTip>
    );
}

export default StreamingLink;
