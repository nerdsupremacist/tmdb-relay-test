
import type { CastCredit_CastCreditBasicPerson$key } from './__generated__/CastCredit_CastCreditBasicPerson.graphql';

import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay';

import { Avatar, Text, VStack } from '@chakra-ui/react'; 

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
        props.data
    );

    const profilePicture = data.value.profilePicture;
    const rest = profilePicture != null ? { src: profilePicture } : {}

    return (
        <VStack w="140px">
            <Avatar w="100px" h="100px" name={data.value.name} shadow="lg" {...rest}/>
            <VStack spacing={0}>
                <Text textAlign="center" fontSize="sm" fontWeight="semibold">{data.value.name}</Text>
                <Text textAlign="center" fontSize="sm" fontWeight="light">as {data.character}</Text>
            </VStack>
        </VStack>
    );
}

export default CastCredit;