import type { ShowLinkContainer_show$key } from './__generated__/ShowLinkContainer_show.graphql';
import type { ReactNode } from 'react';

import React from 'react';
import { Link } from 'react-router-dom';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    show: ShowLinkContainer_show$key,
    children: ReactNode | ReactNode[],
    onClick?: () => void,
}

function ShowLinkContainer(props: Props) {
    const show = useFragment(
        graphql`
            fragment ShowLinkContainer_show on TVShow {
                id
            }
        `,
        props.show,
    );

    return (
        <Link onClick={() => props.onClick?.()} to={`/show/${show.id}`}>
            {props.children}
        </Link>
    );
}

export default ShowLinkContainer;
