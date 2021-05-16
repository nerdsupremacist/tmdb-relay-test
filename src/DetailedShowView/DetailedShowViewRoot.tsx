import type { DetailedShowViewRoot_show$key } from './__generated__/DetailedShowViewRoot_show.graphql';

import React from 'react';
import { Container, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    show: DetailedShowViewRoot_show$key,
}

function DetailedShowViewRoot(props: Props) {
    const show = useFragment(
        graphql`
            fragment DetailedShowViewRoot_show on TVShow {
                name
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
            </VStack>
        </Container>
    );
}

export default DetailedShowViewRoot;
