import type { SeasonRow_season$key } from './__generated__/SeasonRow_season.graphql';

import React from 'react';
import { Text } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import HorizonalScrollview from 'HorizonalScrollview';
import SimpleEpisodeCard from './SimpleEpisodeCard';

type Props = {
    season: SeasonRow_season$key,
}

function SeasonRow(props: Props) {
    const season = useFragment(
        graphql`
            fragment SeasonRow_season on Season {
                seasonNumber
                episodes {
                    ...SimpleEpisodeCard_episode
                }
            }
        `,
        props.season,
    );

    return (
        <>
            <Text fontSize="xl" fontWeight="bold">
                Season {season.seasonNumber}
            </Text>
            <HorizonalScrollview
                align="start"
                padding={2}
                spacing={4}
                w="100%"
            >
                {
                    season.episodes.map((episode, index) => {
                        return (
                            <SimpleEpisodeCard
                                episode={episode}
                                key={`simple_episode_${season.seasonNumber}_${index}`}
                            />
                        );
                    })
                }
            </HorizonalScrollview>
        </>
    );
}

export default SeasonRow;
