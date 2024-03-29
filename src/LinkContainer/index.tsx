import type { LinkContainer_node$key } from './__generated__/LinkContainer_node.graphql';
import type { ReactNode } from 'react';

import React from 'react';
import { Link } from 'react-router-dom';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { usePathLink } from 'routes';

type Props = {
    node: LinkContainer_node$key,
    children: ReactNode | ReactNode[],
    onClick?: () => void,
}

function LinkContainer(props: Props) {
    const node = useFragment(
        graphql`
            fragment LinkContainer_node on Node {
                ...routes_usePathLink_node
            }
        `,
        props.node,
    );

    const path = usePathLink(node);
    if (path == null) {
        return <>
            {props.children}
        </>;
    }

    return (
        <Link onClick={() => props.onClick?.()} to={path}>
            {props.children}
        </Link>
    );
}

export default LinkContainer;
