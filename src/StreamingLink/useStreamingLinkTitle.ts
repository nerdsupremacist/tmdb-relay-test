import type {
    useStreamingLinkTitle_offering$key,
} from './__generated__/useStreamingLinkTitle_offering.graphql';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

function useStreamingLinkTitle(offering: useStreamingLinkTitle_offering$key): string {
    const decoded = useFragment(
        graphql`
            fragment useStreamingLinkTitle_offering on StreamingOptionOffering {
                type
            }
        `,
        offering,
    );

    switch (decoded.type) {
    case 'Buy':
        return 'Buy';
    case 'Cinema':
        return 'Theatre Tickets';
    case 'Rent':
        return 'Rent';
    default:
        return 'Watch Now';
    }
}

export default useStreamingLinkTitle;
