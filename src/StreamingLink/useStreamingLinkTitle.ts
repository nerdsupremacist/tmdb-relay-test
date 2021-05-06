import type { useStreamingLinkTitle_StreamingOptionOffering$key } from './__generated__/useStreamingLinkTitle_StreamingOptionOffering.graphql';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

function useStreamingLinkTitle(offering: useStreamingLinkTitle_StreamingOptionOffering$key): string {
    const decoded = useFragment(
        graphql`
            fragment useStreamingLinkTitle_StreamingOptionOffering on StreamingOptionOffering {
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