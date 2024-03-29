import type { useEpisodeAirDate_episode$key } from './__generated__/useEpisodeAirDate_episode.graphql';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

function useEpisodeAirDate(episode: useEpisodeAirDate_episode$key) {
    const { airDate } = useFragment(
        graphql`
            fragment useEpisodeAirDate_episode on Episode {
                airDate
            }
        `,
        episode,
    );

    if (airDate == null) {
        return null;
    }

    return new Date(airDate);
}

export default useEpisodeAirDate;
