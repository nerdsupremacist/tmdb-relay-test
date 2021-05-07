import type {
    useStreamingLinkPriceDescription_offering$key,
} from './__generated__/useStreamingLinkPriceDescription_offering.graphql';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

function useStreamingLinkPriceDescription(
    offering: useStreamingLinkPriceDescription_offering$key,
): string {
    const decoded = useFragment(
        graphql`
            fragment useStreamingLinkPriceDescription_offering on StreamingOptionOffering {
                type
                price {
                    amount
                    currency
                }
            }
        `,
        offering,
    );

    if (decoded.price != null) {
        return `${decoded.price.amount} ${decoded.price.currency}`;
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
