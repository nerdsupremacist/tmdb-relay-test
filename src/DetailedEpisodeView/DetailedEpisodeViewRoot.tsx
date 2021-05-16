import type { DetailedEpisodeViewRoot_episode$key } from './__generated__/DetailedEpisodeViewRoot_episode.graphql';

import React from 'react';
import { Container, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    episode: DetailedEpisodeViewRoot_episode$key,
}

function DetailedEpisodeViewRoot(props: Props) {
    const episode = useFragment(
        graphql`
            fragment DetailedEpisodeViewRoot_episode on Episode {
                name
            }
        `,
        props.episode,
    );

    return (
        <Container maxW="container.sm" paddingBottom={8} paddingTop={8}>
            <VStack align="baseline" spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                    {episode.name}
                </Text>
            </VStack>
        </Container>
    );
}

export default DetailedEpisodeViewRoot;
