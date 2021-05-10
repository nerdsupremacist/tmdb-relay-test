import type { DetailedPersonViewRoot_person$key } from './__generated__/DetailedPersonViewRoot_person.graphql';

import React from 'react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    person: DetailedPersonViewRoot_person$key,
}

function DetailedPersonViewRoot(props: Props) {
    const person = useFragment(
        graphql`
            fragment DetailedPersonViewRoot_person on Person {
                name
            }
        `,
        props.person,
    );

    return (
        <p>{person.name}</p>
    );
}

export default DetailedPersonViewRoot;
