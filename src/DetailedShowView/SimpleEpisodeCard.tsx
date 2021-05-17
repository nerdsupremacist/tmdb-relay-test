import type { SimpleEpisodeCard_episode$key } from './__generated__/SimpleEpisodeCard_episode.graphql';

import React from 'react';
import { HStack, Image, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import EpisodeLinkContainer from 'EpisodeLinkContainer';

import { BACKDROP_PLACEHOLDER } from 'utils/constants';

type Props = {
    episode: SimpleEpisodeCard_episode$key,
}

function SimpleEpisodeCard(props: Props) {
    const episode = useFragment(
        graphql`
            fragment SimpleEpisodeCard_episode on Episode {
                ...EpisodeLinkContainer_episode
                still(size: W300)

                episodeNumber
                name
                overview
            }
        `,
        props.episode,
    );

    const still = episode.still ?? BACKDROP_PLACEHOLDER;

    return (
        <EpisodeLinkContainer episode={episode}>
            <VStack align="start">
                <Image
                    borderRadius="lg"
                    h="168px"
                    maxW="300px"
                    minW="300px"
                    shadow="xl"
                    src={still}
                />
                <VStack align="start" spacing="0px" w="300px">
                    <HStack divider={<Text fontSize="xl" fontWeight="light" padding={1}>·</Text>}>
                        <Text fontSize="sm" fontWeight="semibold">
                            {episode.episodeNumber}
                        </Text>
                        <Text fontSize="sm" fontWeight="semibold">
                            {episode.name}
                        </Text>
                    </HStack>
                    <Text fontSize="xs" fontWeight="light" noOfLines={3}>
                        {episode.overview}
                    </Text>
                </VStack>
            </VStack>
        </EpisodeLinkContainer>
    );
}

export default SimpleEpisodeCard;
