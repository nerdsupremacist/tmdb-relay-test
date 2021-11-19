import type { DetailedShowViewRoot_show$key } from './__generated__/DetailedShowViewRoot_show.graphql';

import React from 'react';
import { Container, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Cast from 'Cast';
import Crew from 'Crew';
import HorizonalScrollview from 'HorizonalScrollview';
import StreamingLinks from 'StreamingLinks';
import Videos from 'Videos';
import FeaturedEpisodeCard from './FeaturedEpisodeCard';
import RecommendedShows from './RecommendedShows';
import SeasonRow from './SeasonRow';
import ShowHeader from './ShowHeader';
import ShowParallaxBackdrop from './ShowParallaxBackdrop';
import SimilarShows from './SimilarShows';

type Props = {
    show: DetailedShowViewRoot_show$key,
}

function DetailedShowViewRoot(props: Props) {
    const show = useFragment(
        graphql`
            fragment DetailedShowViewRoot_show on TVShow {
                id
                ...ShowHeader_show
                streamingOptions {
                    ...StreamingLinks_links
                }

                overview
                
                lastEpisodeToAir {
                    ...FeaturedEpisodeCard_episode
                }
                nextEpisodeToAir {
                    ...FeaturedEpisodeCard_episode
                }
                topRatedEpisode {
                    ...FeaturedEpisodeCard_episode
                }
                
                credits {
                    cast {
                        ...Cast_credits
                    }
                    crew {
                        ...Crew_credits
                    }
                }
                
                ...ShowParallaxBackdrop_show
                
                seasons {
                    ...SeasonRow_season
                }

                ...RecommendedShows_show
                ...SimilarShows_show

                videos {
                    ...Videos_videos
                }
            }
        `,
        props.show,
    );

    return (
        <div>
            <Container maxW="container.sm" paddingBottom={8} paddingTop={8}>
                <VStack align="baseline" spacing={4}>
                    <ShowHeader show={show} />
                    {

                    }
                    {
                        show.streamingOptions != null && (
                            <StreamingLinks id={show.id} links={show.streamingOptions} />
                        )
                    }
                    <Text>{show.overview}</Text>
                    <HorizonalScrollview
                        align="start"
                        padding={2}
                        spacing={4}
                        w="100%"
                    >
                        {
                            show.lastEpisodeToAir != null && (
                                <VStack align="start">
                                    <Text fontSize="xl" fontWeight="bold">
                                    Last Aired Episode
                                    </Text>
                                    <FeaturedEpisodeCard episode={show.lastEpisodeToAir}/>
                                </VStack>
                            )
                        }

                        {
                            show.nextEpisodeToAir != null && (
                                <VStack align="start">
                                    <Text fontSize="xl" fontWeight="bold">
                                    Next Aired Episode
                                    </Text>
                                    <FeaturedEpisodeCard episode={show.nextEpisodeToAir}/>
                                </VStack>
                            )
                        }

                        {
                            show.topRatedEpisode != null && (
                                <VStack align="start">
                                    <Text fontSize="xl" fontWeight="bold">
                                    Top Rated Episode
                                    </Text>
                                    <FeaturedEpisodeCard episode={show.topRatedEpisode}/>
                                </VStack>
                            )
                        }
                    </HorizonalScrollview>
                    {
                        show.credits.cast.length > 0 && (
                            <>
                                <Text fontSize="xl" fontWeight="bold">
                                    Cast
                                </Text>
                                <Cast credits={show.credits.cast} />
                            </>
                        )
                    }
                </VStack>
            </Container>
            <ShowParallaxBackdrop show={show}/>
            <Container maxW="container.lg" paddingBottom={8} paddingTop={8}>
                <VStack align="baseline" spacing={4}>
                    {
                        show.seasons.map((season, index) => {
                            return (
                                <SeasonRow
                                    key={`season_${index}`}
                                    season={season}
                                />
                            );
                        })
                    }

                    <Text fontSize="xl" fontWeight="bold">
                        Recommended Shows
                    </Text>
                    <RecommendedShows show={show}/>

                    {
                        show.videos.length > 0 && (
                            <>
                                <Text fontSize="xl" fontWeight="bold">
                                    Videos
                                </Text>
                                <Videos videos={show.videos} />
                            </>
                        )
                    }

                    <Text fontSize="xl" fontWeight="bold">
                        Crew
                    </Text>
                    <Crew credits={show.credits.crew}/>

                    <Text fontSize="xl" fontWeight="bold">
                        Similar Shows
                    </Text>
                    <SimilarShows show={show}/>
                </VStack>
            </Container>
        </div>
    );
}

export default DetailedShowViewRoot;
