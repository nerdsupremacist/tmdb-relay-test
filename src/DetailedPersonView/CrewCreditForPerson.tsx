import type { CrewCreditForPerson_credit$key } from './__generated__/CrewCreditForPerson_credit.graphql';

import React from 'react';
import { Image, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import MovieLinkContainer from 'MovieLinkContainer';
import ShowLinkContainer from 'ShowLinkContainer';

import { POSTER_PLACEHOLDER } from 'utils/constants';

type Props = {
    credit: CrewCreditForPerson_credit$key,
}

function CrewCreditForPerson(props: Props) {
    const credit = useFragment(
        graphql`
            fragment CrewCreditForPerson_credit on CrewCreditWithMovieOrTV {
                job
                value {
                    __typename
                    ... on Movie {
                        ...MovieLinkContainer_movie
                        title
                        poster(size: W185)
                    }
                    ... on TVShow {
                        ...ShowLinkContainer_show
                        name
                        poster(size: W185)
                    }
                }
            }
        `,
        props.credit,
    );

    switch (credit.value.__typename) {
    case 'Movie': {
        const poster = credit.value.poster ?? POSTER_PLACEHOLDER;
        return (
            <MovieLinkContainer movie={credit.value}>
                <VStack>
                    <Image borderRadius="lg" h="220px" maxW="150px" minW="150px" shadow="xl" src={poster}/>
                    <VStack spacing={0}>
                        <Text fontSize="sm"
                            fontWeight="semibold"
                            noOfLines={2}
                            textAlign="center"
                        >
                            {credit.value.title}
                        </Text>
                        <Text
                            fontSize="sm"
                            fontWeight="light"
                            noOfLines={2}
                            textAlign="center"
                        >
                            {credit.job}
                        </Text>
                    </VStack>
                </VStack>
            </MovieLinkContainer>
        );
    }
    case 'TVShow': {
        const poster = credit.value.poster ?? POSTER_PLACEHOLDER;
        return (
            <ShowLinkContainer show={credit.value}>
                <VStack>
                    <Image borderRadius="lg" h="220px" maxW="150px" minW="150px" shadow="xl" src={poster}/>
                    <VStack spacing={0}>
                        <Text fontSize="sm"
                            fontWeight="semibold"
                            noOfLines={2}
                            textAlign="center"
                        >
                            {credit.value.name}
                        </Text>
                        <Text
                            fontSize="sm"
                            fontWeight="light"
                            noOfLines={2}
                            textAlign="center"
                        >
                            {credit.job}
                        </Text>
                    </VStack>
                </VStack>
            </ShowLinkContainer>
        );
    }
    default:
        return null;
    }
}

export default CrewCreditForPerson;
