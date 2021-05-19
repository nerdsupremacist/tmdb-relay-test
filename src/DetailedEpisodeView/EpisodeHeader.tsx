import type { EpisodeHeader_episode$key } from './__generated__/EpisodeHeader_episode.graphql';

import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {
    Flex,
    HStack,
    Icon,
    Image,
    Spacer,
    Text,
    VStack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import GenreTag from 'GenreTag';
import HorizonalScrollview from 'HorizonalScrollview';
import LinkContainer from 'LinkContainer';

import useEpisodeAirDate from 'useEpisodeAirDate';

type Props = {
    episode: EpisodeHeader_episode$key,
}

function EpisodeHeader(props: Props) {
    const episode = useFragment(
        graphql`
            fragment EpisodeHeader_episode on Episode {
                previous {
                    ...LinkContainer_node
                    name
                }

                next {
                    ...LinkContainer_node
                    name
                }

                images {
                    stills {
                        aspectRatio
                        url: image(size: Original)
                    }
                }

                name
                
                seasonNumber
                episodeNumber

                ...useEpisodeAirDate_episode

                show {
                    ...LinkContainer_node
                    name
                    genres {
                        ...GenreTag_genre
                    }
                }
            }
        `,
        props.episode,
    );

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
        <>
            <Flex w="100%">
                {
                    episode.previous != null && (
                        <LinkContainer node={episode.previous}>
                            <HStack>
                                <Icon as={FaArrowLeft}/>
                                <Text fontSize="sm" fontWeight="semibold">
                                    {episode.previous.name}
                                </Text>
                            </HStack>
                        </LinkContainer>
                    )
                }
                <Spacer />
                {
                    episode.next != null && (
                        <LinkContainer node={episode.next}>
                            <HStack>
                                <Text fontSize="sm" fontWeight="semibold">
                                    {episode.next.name}
                                </Text>
                                <Icon as={FaArrowRight}/>
                            </HStack>
                        </LinkContainer>
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
                    episode.images.stills.map((image, index) => {
                        return (
                            <Image
                                borderRadius="lg"
                                borderWidth="1px"
                                h={400 / image.aspectRatio}
                                key={`image_${index}`}
                                minW="400"
                                objectFit="cover"
                                overflow="hidden"
                                src={image.url}
                            />
                        );
                    })
                }
            </HorizonalScrollview>
            <VStack align="baseline" spacing={2}>
                <VStack align="baseline" spacing={0}>
                    <LinkContainer node={episode.show}>
                        <Text fontSize="sm" fontWeight="semibold">
                            {episode.show.name}
                        </Text>
                    </LinkContainer>
                    <Text fontSize="3xl" fontWeight="bold">
                        {episode.name}
                    </Text>
                    <HStack divider={<Text fontSize="xl" fontWeight="light" padding={1}>·</Text>}>
                        <Text fontSize="md" fontWeight="light">
                        Season {episode.seasonNumber} Episode {episode.episodeNumber}
                        </Text>
                        {
                            formattedAirDate != null && <Text fontSize="md" fontWeight="light">
                                {formattedAirDate}
                            </Text>
                        }
                    </HStack>
                </VStack>
                <Wrap spacing={2}>
                    {
                        episode.show.genres.map((genre, index) => {
                            return <WrapItem key={`genre_${index}`}><GenreTag data={genre} /></WrapItem>;
                        })
                    }
                </Wrap>
            </VStack>
        </>
    );
}

export default EpisodeHeader;
