import type { EpisodeLinkContainer_episode$key } from './__generated__/EpisodeLinkContainer_episode.graphql';
import type { ReactNode } from 'react';

import React from 'react';
import { Link } from 'react-router-dom';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    episode: EpisodeLinkContainer_episode$key,
    children: ReactNode | ReactNode[],
}

function EpisodeLinkContainer(props: Props) {
    const episode = useFragment(
        graphql`
            fragment EpisodeLinkContainer_episode on Episode {
                id
            }
        `,
        props.episode,
    );

    return (
        <Link to={`/episode/${episode.id}`}>
            {props.children}
        </Link>
    );
}

export default EpisodeLinkContainer;
