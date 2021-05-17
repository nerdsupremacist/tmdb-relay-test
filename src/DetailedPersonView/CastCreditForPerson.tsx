import type { CastCreditForPerson_credit$key } from './__generated__/CastCreditForPerson_credit.graphql';

import React from 'react';
import { Image, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import MovieLinkContainer from 'MovieLinkContainer';
import ShowLinkContainer from 'ShowLinkContainer';

import { POSTER_PLACEHOLDER } from 'utils/constants';

type Props = {
    credit: CastCreditForPerson_credit$key,
}

function CastCreditForPerson(props: Props) {
    const credit = useFragment(
        graphql`
            fragment CastCreditForPerson_credit on CastCreditWithMovieOrTV {
                character
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
                            noOfLines={3}
                            textAlign="center"
                        >
                            as {credit.character}
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
                            noOfLines={3}
                            textAlign="center"
                        >
                            as {credit.character}
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

export default CastCreditForPerson;
