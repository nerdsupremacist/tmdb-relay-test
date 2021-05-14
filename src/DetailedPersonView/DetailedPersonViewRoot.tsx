import type { DetailedPersonViewRoot_person$key } from './__generated__/DetailedPersonViewRoot_person.graphql';

import React from 'react';
import { Container, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import PersonHeader from './PersonHeader';

type Props = {
    person: DetailedPersonViewRoot_person$key,
}

function DetailedPersonViewRoot(props: Props) {
    const person = useFragment(
        graphql`
            fragment DetailedPersonViewRoot_person on Person {
                ...PersonHeader_person
                biography
            }
        `,
        props.person,
    );

    return (
        <Container maxW="container.sm" paddingBottom={8} paddingTop={8}>
            <VStack align="baseline" spacing={4}>
                <PersonHeader person={person} />
                <Text fontSize="sm" fontWeight="normal">
                    {person.biography}
                </Text>
            </VStack>
        </Container>
    );
}

export default DetailedPersonViewRoot;
