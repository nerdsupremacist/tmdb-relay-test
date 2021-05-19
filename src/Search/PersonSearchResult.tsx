import type { PersonSearchResult_person$key } from './__generated__/PersonSearchResult_person.graphql';

import React from 'react';
import { Avatar, HStack, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LinkContainer from 'LinkContainer';
import { useOnClickOnResults } from './SearchContext';

import useKnownForDescription from './useKnownForDescription';

type Props = {
    person: PersonSearchResult_person$key,
}

function PersonSearchResult(props: Props) {
    const onClick = useOnClickOnResults();
    const person = useFragment(
        graphql`
            fragment PersonSearchResult_person on Person {
                ...LinkContainer_node

                name
                profilePicture(size: W185)

                ...useKnownForDescription_person
            }
        `,
        props.person,
    );

    const avatarProps = person.profilePicture != null ? { src: person.profilePicture } : {};
    const knownFor = useKnownForDescription(person);

    return (
        <LinkContainer node={person} onClick={onClick}>
            <HStack align="start" spacing="4">
                <Avatar
                    h="100px"
                    name={person.name}
                    shadow="xl"
                    w="100px"

                    {...avatarProps}
                />
                <VStack align="baseline" spacing="0">
                    <Text fontSize="md" fontWeight="bold">
                        {person.name}
                    </Text>
                    {knownFor != null && <Text fontSize="xs" fontWeight="light">
                        Known for {knownFor}
                    </Text>
                    }
                </VStack>
            </HStack>
        </LinkContainer>
    );
}

export default PersonSearchResult;
