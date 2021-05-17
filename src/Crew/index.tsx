import type { Crew_credits$key } from './__generated__/Crew_credits.graphql';

import React from 'react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import HorizonalScrollview from 'HorizonalScrollview';
import CrewCredit from './CrewCredit';

type Props = {
    credits: Crew_credits$key,
}

function Crew(props: Props) {
    const credits = useFragment(
        graphql`
            fragment Crew_credits on CrewCreditWithPerson @relay(plural: true) {
                ...CrewCredit_credit
            }
        `,
        props.credits,
    );
    
    return (
        <HorizonalScrollview align="start" maxW="100%" padding={2}>
            {
                credits.map((credit, index) => {
                    return (
                        <CrewCredit credit={credit} key={`crew_credit_${index}`}/>
                    );
                })
            }
        </HorizonalScrollview>
    );
}

export default Crew;
