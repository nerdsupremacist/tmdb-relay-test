import type { DetailedEpisodeViewRoot_episode$key } from './__generated__/DetailedEpisodeViewRoot_episode.graphql';

import React from 'react';
import { Container, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Cast from 'Cast';
import Crew from 'Crew';
import RecommendedShows from 'DetailedShowView/RecommendedShows';
import SimilarShows from 'DetailedShowView/SimilarShows';
import StreamingLinks from 'StreamingLinks';
import Videos from 'Videos';
import EpisodeHeader from './EpisodeHeader';

type Props = {
    episode: DetailedEpisodeViewRoot_episode$key,
}

function DetailedEpisodeViewRoot(props: Props) {
    const episode = useFragment(
        graphql`
            fragment DetailedEpisodeViewRoot_episode on Episode {
                ...EpisodeHeader_episode
                
                streamingOptions {
                    ...StreamingLinks_links
                }

                overview

                show {
                    name
                    ...SimilarShows_show
                    ...RecommendedShows_show
                }

                credits {
                    guestStars {
                        ...Cast_credits
                    }
                    cast {
                        ...Cast_credits
                    }
                    crew {
                        ...Crew_credits
                    }
                }

                videos {
                    ...Videos_videos
                }
            }
        `,
        props.episode,
    );

    return (
        <Container maxW="container.sm" paddingBottom={8} paddingTop={8}>
            <VStack align="baseline" spacing={4}>
                <EpisodeHeader episode={episode} />
                {
                    episode.streamingOptions != null && (
                        <StreamingLinks links={episode.streamingOptions} />
                    )
                }
                <Text>
                    {episode.overview}
                </Text>

                {
                    episode.credits.cast.length > 0 && (
                        <>
                            <Text fontSize="xl" fontWeight="bold">
                                Cast
                            </Text>
                            <Cast credits={episode.credits.cast} />
                        </>
                    )
                }

                {
                    episode.credits.guestStars.length > 0 && (
                        <>
                            <Text fontSize="xl" fontWeight="bold">
                                Guest Stars
                            </Text>
                            <Cast credits={episode.credits.guestStars} />
                        </>
                    )
                }

                {
                    episode.videos.length > 0 && (
                        <>
                            <Text fontSize="xl" fontWeight="bold">
                                    Videos
                            </Text>
                            <Videos videos={episode.videos} />
                        </>
                    )
                }
                
                <Text fontSize="xl" fontWeight="bold">
                    Similar to {episode.show.name}
                </Text>
                <SimilarShows show={episode.show} />

                {
                    episode.credits.crew.length > 0 && (
                        <>
                            <Text fontSize="xl" fontWeight="bold">
                                Crew
                            </Text>
                            <Crew credits={episode.credits.crew} />
                        </>
                    )
                }

                <Text fontSize="xl" fontWeight="bold">
                    Recommended based on {episode.show.name}
                </Text>
                <RecommendedShows show={episode.show} />
            </VStack>
        </Container>
    );
}

export default DetailedEpisodeViewRoot;
