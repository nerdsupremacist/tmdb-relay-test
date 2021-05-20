import type { SeasonRow_season$key } from './__generated__/SeasonRow_season.graphql';

import React from 'react';
import { Flex, Spacer, Text } from '@chakra-ui/react';

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
                episodeCount
                episodes {
                    ...SimpleEpisodeCard_episode
                }
            }
        `,
        props.season,
    );

    if (season.episodeCount < 0) {
        return null;
    }

    return (
        <>
            <Flex align="center" w="100%">
                <Text fontSize="xl" fontWeight="bold">
                    {season.seasonNumber > 0 ? `Season ${season.seasonNumber}` : 'Extras'}
                </Text>
                <Spacer />
                {
                    season.episodeCount === 1 && season.seasonNumber > 0 && (
                        <Text fontSize="md" fontWeight="light">
                            1 Episode
                        </Text>
                    )
                }
                {
                    season.episodeCount > 1 && season.seasonNumber > 0 && (
                        <Text fontSize="md" fontWeight="light">
                            {season.episodeCount} Episodes
                        </Text>
                    )
                }
            </Flex>
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
