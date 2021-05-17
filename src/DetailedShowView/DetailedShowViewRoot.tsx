import type { DetailedShowViewRoot_show$key } from './__generated__/DetailedShowViewRoot_show.graphql';

import React from 'react';
import { Container, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Cast from 'Cast';
import Crew from 'Crew';
import HorizonalScrollview from 'HorizonalScrollview';
import FeaturedEpisodeCard from './FeaturedEpisodeCard';
import SeasonRow from './SeasonRow';
import ShowHeader from './ShowHeader';
import ShowParallaxBackdrop from './ShowParallaxBackdrop';
import ShowStreamingLinks from './ShowStreamingLinks';

type Props = {
    show: DetailedShowViewRoot_show$key,
}

function DetailedShowViewRoot(props: Props) {
    const show = useFragment(
        graphql`
            fragment DetailedShowViewRoot_show on TVShow {
                ...ShowHeader_show
                ...ShowStreamingLinks_show

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
                    ...Cast_credits
                    ...Crew_credits
                }
                
                ...ShowParallaxBackdrop_show
                
                seasons {
                    ...SeasonRow_season
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
                    <ShowStreamingLinks show={show} />
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
                    <Text fontSize="xl" fontWeight="bold">
                        Cast
                    </Text>
                    <Cast credits={show.credits} />
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
                        Crew
                    </Text>
                    <Crew credits={show.credits}/>
                </VStack>
            </Container>
        </div>
    );
}

export default DetailedShowViewRoot;
