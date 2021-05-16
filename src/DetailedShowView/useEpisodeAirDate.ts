import type { useEpisodeAirDate_episode$key } from './__generated__/useEpisodeAirDate_episode.graphql';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

function useEpisodeAirDate(episode: useEpisodeAirDate_episode$key) {
    const decoded = useFragment(
        graphql`
            fragment useEpisodeAirDate_episode on Episode {
                airDate
            }
        `,
        episode,
    );

    const date = new Date(decoded.airDate);
    return date.toLocaleDateString(
        undefined,
        {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        },
    );
}

export default useEpisodeAirDate;
