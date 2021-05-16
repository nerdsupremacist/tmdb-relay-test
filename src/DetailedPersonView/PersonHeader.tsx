import type { PersonHeader_person$key } from './__generated__/PersonHeader_person.graphql';

import React from 'react';
import { FaFacebook, FaImdb, FaInstagram, FaTwitter } from 'react-icons/fa';
import {
    Badge,
    Button,
    HStack,
    Icon,
    Image,
    Link,
    Text,
    Tooltip,
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
                externalIds {
                    imdb
                    facebook
                    instagram
                    twitter
                }
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
                <HStack>
                    {
                        person.externalIds.imdb != null && (
                            <Tooltip
                                bg="gray.300"
                                color="black"
                                hasArrow
                                label={`${person.name} on IMDB`}
                                placement="bottom"
                            >
                                <Link
                                    href={`https://www.imdb.com/name/${person.externalIds.imdb}`}
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                >
                                    <Button variant="outline">
                                        <Text fontSize="lg" fontWeight="semibold">
                                            <Icon as={FaImdb}/>
                                        </Text>
                                    </Button>
                                </Link>
                            </Tooltip>
                        )
                    }
                    {
                        person.externalIds.twitter != null && (
                            <Tooltip
                                bg="gray.300"
                                color="black"
                                hasArrow
                                label={`${person.name} on Twitter`}
                                placement="bottom"
                            >
                                <Link
                                    href={`https://twitter.com/${person.externalIds.twitter}`}
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                >
                                    <Button variant="outline">
                                        <Text fontSize="lg" fontWeight="semibold">
                                            <Icon as={FaTwitter}/>
                                        </Text>
                                    </Button>
                                </Link>
                            </Tooltip>
                        )
                    }
                    {
                        person.externalIds.instagram != null && (
                            <Tooltip
                                bg="gray.300"
                                color="black"
                                hasArrow
                                label={`${person.name} on Instagram`}
                                placement="bottom"
                            >
                                <Link
                                    href={`https://instagram.com/${person.externalIds.instagram}`}
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                >
                                    <Button variant="outline">
                                        <Text fontSize="lg" fontWeight="semibold">
                                            <Icon as={FaInstagram}/>
                                        </Text>
                                    </Button>
                                </Link>
                            </Tooltip>
                        )
                    }
                    {
                        person.externalIds.facebook != null && (
                            <Tooltip
                                bg="gray.300"
                                color="black"
                                hasArrow
                                label={`${person.name} on Facebook`}
                                placement="bottom"
                            >
                                <Link
                                    href={`https://facebook.com/${person.externalIds.facebook}`}
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                >
                                    <Button variant="outline">
                                        <Text fontSize="lg" fontWeight="semibold">
                                            <Icon as={FaFacebook}/>
                                        </Text>
                                    </Button>
                                </Link>
                            </Tooltip>
                        )
                    }
                </HStack>
            </VStack>
        </HStack>
    );
}

export default PersonHeader;
