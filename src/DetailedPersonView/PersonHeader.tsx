import type { PersonHeader_person$key } from './__generated__/PersonHeader_person.graphql';

import React from 'react';
import {
    Badge,
    HStack,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { PROFILE_PICTURE_PLACEHOLDER } from 'utils/constants';

type Props = {
    person: PersonHeader_person$key,
}

function PersonHeader(props: Props) {
    const person = useFragment(
        graphql`
            fragment PersonHeader_person on Person {
                name
                profilePicture(size: W185)
                knownForDepartment
                placeOfBirth
            }
        `,
        props.person,
    );

    const profilePicture = person.profilePicture ?? PROFILE_PICTURE_PLACEHOLDER;
    
    return (
        <HStack align="flex-end" spacing={4}>
            <Image
                borderRadius="lg"
                borderWidth="1px"
                maxW="185"
                minW="100"
                objectFit="cover"
                overflow="hidden"
                shadow="xl"
                src={profilePicture}
            />
            <VStack align="baseline" spacing={2}>
                <VStack align="baseline" spacing={0}>
                    {person.knownForDepartment !== 'actor' && (
                        <Badge borderRadius="xl" px="2">
                            {person.knownForDepartment}
                        </Badge>
                    )}
                    <Text fontSize="3xl" fontWeight="bold">
                        {person.name}
                    </Text>
                    <HStack divider={<Text fontSize="xl" fontWeight="light" padding={1}>·</Text>}>
                        {
                            person.placeOfBirth != null && <Text fontSize="md">
                                {person.placeOfBirth}
                            </Text>
                        }
                    </HStack>
                </VStack>
            </VStack>
        </HStack>
    );
}

export default PersonHeader;
