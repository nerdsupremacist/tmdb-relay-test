import type { useShowAirDate_show$key } from './__generated__/useShowAirDate_show.graphql';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

function useShowAirDate(show: useShowAirDate_show$key) {
    const { firstAirDate } = useFragment(
        graphql`
            fragment useShowAirDate_show on TVShow {
                firstAirDate
            }
        `,
        show,
    );

    if (firstAirDate == null) {
        return null;
    }

    return new Date(firstAirDate);
}

export default useShowAirDate;
