import type { FeaturedEpisodeCard_episode$key } from './__generated__/FeaturedEpisodeCard_episode.graphql';

import React from 'react';
import { HStack, Image, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LinkContainer from 'LinkContainer';

import useEpisodeAirDate from 'useEpisodeAirDate';

import { BACKDROP_PLACEHOLDER } from 'utils/constants';

type Props = {
    episode: FeaturedEpisodeCard_episode$key,
}

function FeaturedEpisodeCard(props: Props) {
    const episode = useFragment(
        graphql`
            fragment FeaturedEpisodeCard_episode on Episode {
                ...LinkContainer_node
                name
                still(size: W300)
                
                seasonNumber
                episodeNumber
                ...useEpisodeAirDate_episode

                overview
            }
        `,
        props.episode,
    );

    const still = episode.still ?? BACKDROP_PLACEHOLDER;
    const airDate = useEpisodeAirDate(episode);
    const formattedAirDate = airDate?.toLocaleDateString(
        undefined,
        {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        },
    );

    return (
        <LinkContainer node={episode}>
            <VStack align="start">
                <Image
                    borderRadius="lg"
                    h="150px"
                    maxW="265px"
                    minW="265px"
                    shadow="xl"
                    src={still}
                />
                <VStack align="start" spacing="0px" w="265px">
                    <Text fontSize="md" fontWeight="semibold">
                        {episode.name}
                    </Text>
                    <HStack divider={<Text fontSize="xl" fontWeight="light" padding={1}>·</Text>}>
                        <Text fontSize="sm" fontWeight="medium">
                            S{episode.seasonNumber} E{episode.episodeNumber}
                        </Text>
                        <Text fontSize="sm" fontWeight="medium">
                            {formattedAirDate}
                        </Text>
                    </HStack>
                    <Text fontSize="xs" fontWeight="light" noOfLines={4}>
                        {episode.overview}
                    </Text>
                </VStack>
            </VStack>
        </LinkContainer>
    );
}

export default FeaturedEpisodeCard;
