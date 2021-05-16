import type { DetailedShowViewRoot_show$key } from './__generated__/DetailedShowViewRoot_show.graphql';

import React from 'react';
import { Container, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import HorizonalScrollview from 'HorizonalScrollview';
import FeaturedEpisodeCard from './FeaturedEpisodeCard';

type Props = {
    show: DetailedShowViewRoot_show$key,
}

function DetailedShowViewRoot(props: Props) {
    const show = useFragment(
        graphql`
            fragment DetailedShowViewRoot_show on TVShow {
                name
                lastEpisodeToAir {
                    ...FeaturedEpisodeCard_episode
                }
                nextEpisodeToAir {
                    ...FeaturedEpisodeCard_episode
                }
            }
        `,
        props.show,
    );

    return (
        <Container maxW="container.sm" paddingBottom={8} paddingTop={8}>
            <VStack align="baseline" spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                    {show.name}
                </Text>
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
                </HorizonalScrollview>
            </VStack>
        </Container>
    );
}

export default DetailedShowViewRoot;
