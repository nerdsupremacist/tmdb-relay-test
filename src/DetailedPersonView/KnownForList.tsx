import type { KnownForList_person$key } from './__generated__/KnownForList_person.graphql';

import React from 'react';
import { Divider, HStack, Text, VStack } from '@chakra-ui/layout';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import HorizonalScrollview from 'HorizonalScrollview';
import CastCreditForPerson from './CastCreditForPerson';
import MovieOrShowResult from './MovieOrShowResult';

type Props = {
    person: KnownForList_person$key,
}

function KnownForList(props: Props) {
    const person = useFragment(
        graphql`
            fragment KnownForList_person on Person {
                knownForDepartment
                knownFor {
                    ...MovieOrShowResult_result
                }
                credits {
                    all {
                        cast {
                            ...CastCreditForPerson_credit
                        }
                    }
                }
            }
        `,
        props.person,
    );

    const isActor = person.knownForDepartment === 'Acting';

    return (
        <HorizonalScrollview align="baseline" w="100%">
            <VStack align="start">
                <Text fontSize="xl" fontWeight="bold">
                    Known For
                </Text>
                <HStack align="baseline">
                    {
                        person.knownFor.map((result, index) => {
                            return (
                                <MovieOrShowResult
                                    key={`movie_or_show_result_known_for${index}`}
                                    result={result}
                                />
                            );
                        })
                    }
                </HStack>
            </VStack>
            <Divider orientation="vertical" w="2px"/>
            {
                isActor && (
                    <VStack align="start">
                        <Text fontSize="xl" fontWeight="bold">
                            Appeared on
                        </Text>
                        <HStack align="baseline">
                            {
                                person.credits.all.cast.map((credit, index) => {
                                    return (
                                        <CastCreditForPerson
                                            credit={credit}
                                            key={`cast_credit_person_${index}`}
                                        />
                                    );
                                })
                            }
                        </HStack>
                    </VStack>
                )
            }
        </HorizonalScrollview>
    );
}

export default KnownForList;
