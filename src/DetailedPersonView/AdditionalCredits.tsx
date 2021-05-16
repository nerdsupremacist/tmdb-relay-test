import type { AdditionalCredits_person$key } from './__generated__/AdditionalCredits_person.graphql';

import React from 'react';
import { HStack, Text } from '@chakra-ui/layout';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import HorizonalScrollview from 'HorizonalScrollview';
import CastCreditForPerson from './CastCreditForPerson';
import CrewCreditForPerson from './CrewCreditForPerson';

import useIsActor from './useIsActor';

type Props = {
    person: AdditionalCredits_person$key,
}

function AdditionalCredits(props: Props) {
    const person = useFragment(
        graphql`
            fragment AdditionalCredits_person on Person {
                ...useIsActor_person
                credits {
                    all {
                        cast {
                            ...CastCreditForPerson_credit
                        }
                        crew {
                            ...CrewCreditForPerson_credit
                        }
                    }
                }
            }
        `,
        props.person,
    );

    const isActor = useIsActor(person);

    if (isActor) {
        if (person.credits.all.crew.length < 1) {
            return null;
        }

        return (
            <>
                <Text fontSize="xl" fontWeight="bold">
                    Worked on
                </Text>
                <HorizonalScrollview align="baseline" w="100%">
                    <HStack align="baseline">
                        {
                            person.credits.all.crew.map((credit, index) => {
                                return (
                                    <CrewCreditForPerson
                                        credit={credit}
                                        key={`crew_credit_person_${index}`}
                                    />
                                );
                            })
                        }
                    </HStack>
                </HorizonalScrollview>
            </>
        );
    }

    if (person.credits.all.cast.length < 1) {
        return null;
    }

    return (
        <>
            <Text fontSize="xl" fontWeight="bold">
                Appeared on
            </Text>
            <HorizonalScrollview align="baseline" w="100%">
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
            </HorizonalScrollview>
        </>
    );
}

export default AdditionalCredits;
