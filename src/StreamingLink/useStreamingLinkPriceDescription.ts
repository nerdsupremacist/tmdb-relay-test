import type { useStreamingLinkPriceDescription_StreamingOptionOffering$key } from './__generated__/useStreamingLinkPriceDescription_StreamingOptionOffering.graphql';

import { useFragment } from 'react-relay';

import { graphql } from 'babel-plugin-relay/macro';

function useStreamingLinkPriceDescription(offering: useStreamingLinkPriceDescription_StreamingOptionOffering$key): string {
    const decoded = useFragment(
        graphql`
            fragment useStreamingLinkPriceDescription_StreamingOptionOffering on StreamingOptionOffering {
                type
                price {
                    amount
                    currency
                }
            }
        `,
        offering
    );

    if (decoded.price != null) {
        return `${decoded.price.amount} ${decoded.price.currency}`
    }

    switch (decoded.type) {
        case 'Ads':
            return 'With Ads';
        case 'Flatrate':
            return 'Subscription';
        default:
            return 'Free';
    }
}

export default useStreamingLinkPriceDescription;