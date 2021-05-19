import type {
    routes_usePathLink_node$key,
} from './__generated__/routes_usePathLink_node.graphql';
import type {
    routes_usePathLinks_nodes$key,
} from './__generated__/routes_usePathLinks_nodes.graphql';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

const nodeTypes = <const> ['Movie', 'TVShow', 'Episode', 'Person'];
type NodeType = typeof nodeTypes[number];

const nodeTypesAsStrings = nodeTypes.map(type => type as string);

function isNodeType(value: string): value is NodeType {
    return nodeTypesAsStrings.includes(value);
}

export function pathLink(type: NodeType, id?: string) {
    let path: string;
    switch (type) {
    case 'Movie':
        path = 'movie';
        break;
    case 'TVShow':
        path = 'show';
        break;
    case 'Episode':
        path = 'episode';
        break;
    case 'Person':
        path = 'person';
        break;
    }

    const idOrPlaceholder = id ?? ':id';
    return `/${path}/${idOrPlaceholder}`;
}

export function usePathLinks(nodes: routes_usePathLinks_nodes$key) {
    const decoded = useFragment(
        graphql`
            fragment routes_usePathLinks_nodes on Node
            @relay(plural: true) {
                __typename
                id
            }
        `,
        nodes,
    );

    return decoded.map(node => {
        if (isNodeType(node.__typename)) {
            return pathLink(node.__typename, node.id);
        }

        return null;
    });
}

export function usePathLink(node: routes_usePathLink_node$key) {
    const decoded = useFragment(
        graphql`
            fragment routes_usePathLink_node on Node {
                ...routes_usePathLinks_nodes
            }
        `,
        node,
    );

    return usePathLinks([decoded])[0];
}
