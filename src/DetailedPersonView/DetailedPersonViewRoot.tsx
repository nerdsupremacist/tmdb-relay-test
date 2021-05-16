import type { DetailedPersonViewRoot_person$key } from './__generated__/DetailedPersonViewRoot_person.graphql';

import React, { useState } from 'react';
import { Button, Collapse, Container, Flex, Spacer, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import AdditionalCredits from './AdditionalCredits';
import KnownForList from './KnownForList';
import PersonHeader from './PersonHeader';

type Props = {
    person: DetailedPersonViewRoot_person$key,
}

function DetailedPersonViewRoot(props: Props) {
    const [showMoreBio, setShowMoreBio] = useState(false);
    const person = useFragment(
        graphql`
            fragment DetailedPersonViewRoot_person on Person {
                ...PersonHeader_person
                biography
                ...KnownForList_person
                ...AdditionalCredits_person
            }
        `,
        props.person,
    );

    return (
        <Container maxW="container.sm" paddingBottom={8} paddingTop={8}>
            <VStack align="baseline" spacing={4}>
                <PersonHeader person={person} />
                <Collapse in={showMoreBio} startingHeight={60}>
                    <Text fontSize="sm" fontWeight="normal">
                        {person.biography}
                    </Text>
                </Collapse>
                <Flex w="100%">
                    <Spacer/>
                    <Button onClick={() => setShowMoreBio(showMore => !showMore)} variant="ghost">
                        {showMoreBio ? 'Show Less' : 'Show More'}
                    </Button>
                </Flex>
                <KnownForList person={person} />
                <AdditionalCredits person={person} />
            </VStack>
        </Container>
    );
}

export default DetailedPersonViewRoot;
