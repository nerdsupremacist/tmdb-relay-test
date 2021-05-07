import type { Cast_credits$key } from './__generated__/Cast_credits.graphql';

import React from 'react';
import { HStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import CastCredit from './CastCredit';

type Props = {
    credits: Cast_credits$key,
}

function Cast(props: Props) {
    const credits = useFragment(
        graphql`
            fragment Cast_credits on ICreditsBasicPerson {        
                cast {
                    ...CastCredit_credit
                }
            }
        `,
        props.credits,
    );

    return (
        <HStack align="start" maxW="100%" overflowY="scroll" padding={2}>
            {
                credits.cast.map((credit, index) => {
                    return <CastCredit credit={credit} key={`cast_credit_${index}`} />;
                })
            }
        </HStack>
    );
}

export default Cast;
