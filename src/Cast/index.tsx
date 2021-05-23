import type { Cast_credits$key } from './__generated__/Cast_credits.graphql';

import React from 'react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import HorizonalScrollview from 'HorizonalScrollview';
import CastCredit from './CastCredit';

type Props = {
    credits: Cast_credits$key,
}

function Cast(props: Props) {
    const credits = useFragment(
        graphql`
            fragment Cast_credits on CastCreditWithPerson @relay(plural: true) {        
                ...CastCredit_credit
            }
        `,
        props.credits,
    );

    return (
        <HorizonalScrollview align="start" maxW="100%" minW="100%" padding={2}>
            {
                credits.map((credit, index) => {
                    return <CastCredit credit={credit} key={`cast_credit_${index}`} />;
                })
            }
        </HorizonalScrollview>
    );
}

export default Cast;
