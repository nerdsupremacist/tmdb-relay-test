import type { PersonLinkContainer_person$key } from './__generated__/PersonLinkContainer_person.graphql';
import type { ReactNode } from 'react';

import React from 'react';
import { Link } from 'react-router-dom';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    person: PersonLinkContainer_person$key,
    children: ReactNode | ReactNode[],
}

function PersonLinkContainer(props: Props) {
    const person = useFragment(
        graphql`
            fragment PersonLinkContainer_person on IBasicPerson {
                personId: id
            }
        `,
        props.person,
    );

    return (
        <Link to={`/person/${person.personId}`}>
            {props.children}
        </Link>
    );
}

export default PersonLinkContainer;
