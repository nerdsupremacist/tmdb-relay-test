import type { CrewCredit_credit$key } from './__generated__/CrewCredit_credit.graphql';

import React from 'react';
import { Avatar, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LinkContainer from 'LinkContainer';

type Props = {
    credit: CrewCredit_credit$key,
}

function CrewCredit(props: Props) {
    const credit = useFragment(
        graphql`
            fragment CrewCredit_credit on CrewCreditWithPerson {
                actor: value {
                    ...LinkContainer_node
                    name
                    profilePicture(size: W185)
                }
                job
            }
        `,
        props.credit,
    );

    const profilePicture = credit.actor.profilePicture;
    const rest = profilePicture != null ? { src: profilePicture } : {};

    return (
        <LinkContainer node={credit.actor}>
            <VStack w="120px">
                <Avatar h="100px" name={credit.actor.name} shadow="xl" w="100px" {...rest} />
                <VStack spacing={0}>
                    <Text fontSize="sm"
                        fontWeight="semibold"
                        noOfLines={2}
                        textAlign="center">
                            
                        {credit.actor.name}
                    </Text>
                    <Text fontSize="sm" fontWeight="light" noOfLines={2} textAlign="center">
                        {credit.job}
                    </Text>
                </VStack>
            </VStack>
        </LinkContainer>
    );
}

export default CrewCredit;
