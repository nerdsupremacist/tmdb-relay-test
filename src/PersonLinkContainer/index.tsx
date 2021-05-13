import type { PersonLinkContainer_person$key } from './__generated__/PersonLinkContainer_person.graphql';
import type { ReactNode } from 'react';

import React from 'react';
import { Link } from 'react-router-dom';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    person: PersonLinkContainer_person$key,
    children: ReactNode | ReactNode[],
    onClick?: () => void,
}

function PersonLinkContainer(props: Props) {
    const person = useFragment(
        graphql`
            fragment PersonLinkContainer_person on Person {
                id
            }
        `,
        props.person,
    );

    return (
        <Link onClick={() => props.onClick?.()} to={`/person/${person.id}`}>
            {props.children}
        </Link>
    );
}

export default PersonLinkContainer;