import type { EpisodeHeader_episode$key } from './__generated__/EpisodeHeader_episode.graphql';

import React from 'react';
import {
    HStack,
    Image,
    Text,
    VStack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import GenreTag from 'GenreTag';
import HorizonalScrollview from 'HorizonalScrollview';
import ShowLinkContainer from 'ShowLinkContainer';

import useEpisodeAirDate from 'useEpisodeAirDate';

type Props = {
    episode: EpisodeHeader_episode$key,
}

function EpisodeHeader(props: Props) {
    const episode = useFragment(
        graphql`
            fragment EpisodeHeader_episode on Episode {
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
                    ...ShowLinkContainer_show
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
                    <ShowLinkContainer show={episode.show}>
                        <Text fontSize="sm" fontWeight="semibold">
                            {episode.show.name}
                        </Text>
                    </ShowLinkContainer>
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
