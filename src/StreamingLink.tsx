import type { StreamingLink_StreamingOption$key, StreamingMonetizationType } from './__generated__/StreamingLink_StreamingOption.graphql';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { Link, Image, Text, VStack } from "@chakra-ui/react"

type Props = {
    data: StreamingLink_StreamingOption$key
}

function watchDescription(type: StreamingMonetizationType): string {
    switch (type) {
        case 'Buy':
            return 'Buy';
        case 'Cinema':
            return 'Theatre Tickets';
        case 'Rent':
            return 'Rent';
        case 'Ads':
            return 'Watch Now';
        case 'Flatrate':
            return 'Watch Now';
        case 'Free':
            return 'Watch Now';
        case '%future added value':
            return 'Watch Now';
    }
}

type Price = { readonly amount: number, readonly currency: string }

function priceDescription(price: Price | null, type: StreamingMonetizationType) {
    if (price != null) {
        return `${price.amount} ${price.currency}`
    }

    switch (type) {
        case 'Ads':
            return 'With Ads';
        case 'Flatrate':
            return 'Subscription';
        default:
            return 'Free';
    }
}

function StreamingLink({ data }: Props) {
    const option = useFragment(
        graphql`
            fragment StreamingLink_StreamingOption on StreamingOption {    
                provider {
                    iconURL
                }
                bestOffering {
                    links {
                        web
                    }
                    price {
                        amount
                        currency
                    }
                    type
                }
            }
        `,
        data
    );

    if (option.provider == null) {
        return null;
    }

    return (
        <Link href={option.bestOffering.links.web} textAlign="center">
            <VStack align="center" spacing="0">
                <Image 
                    src={option.provider.iconURL}
                    shadow="lg"
                    maxW="50"
                    borderRadius="xl"
                    borderWidth="1px"
                />
                <Text paddingTop="2" fontWeight="semibold" fontSize="sm">
                {watchDescription(option.bestOffering.type)}
                </Text>    
                <Text fontWeight="light" fontSize="sm">
                    {priceDescription(option.bestOffering.price, option.bestOffering.type)}
                </Text>
            </VStack>
        </Link>
    );
}

export default StreamingLink;
