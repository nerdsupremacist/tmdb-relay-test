
import type { CastCredit_CastCreditBasicPerson$key } from './__generated__/CastCredit_CastCreditBasicPerson.graphql';

import React from 'react';
import { Avatar, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro'

type Props = {
    data: CastCredit_CastCreditBasicPerson$key,
}

function CastCredit(props: Props) {
    const data = useFragment(
        graphql`
            fragment CastCredit_CastCreditBasicPerson on CastCreditBasicPerson {
                value {
                    name
                    profilePicture(size: W185)
                }
                character
            }
        `,
        props.data,
    );

    const profilePicture = data.value.profilePicture;
    const rest = profilePicture != null ? { src: profilePicture } : {}

    return (
        <VStack w="140px">
            <Avatar h="100px" name={data.value.name} shadow="lg" w="100px" {...rest} />
            <VStack spacing={0}>
                <Text fontSize="sm" fontWeight="semibold" noOfLines={2} textAlign="center">{data.value.name}</Text>
                <Text fontSize="sm" fontWeight="light" noOfLines={3} textAlign="center">as {data.character}</Text>
            </VStack>
        </VStack>
    );
}

export default CastCredit;