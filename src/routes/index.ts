import type {
    routes_usePathLink_node$key,
} from './__generated__/routes_usePathLink_node.graphql';
import type {
    routes_usePathLinks_nodes,
    routes_usePathLinks_nodes$key,
} from './__generated__/routes_usePathLinks_nodes.graphql';

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type NodeType = ArrayElement<routes_usePathLinks_nodes>['__typename'];

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

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
    default:
        return null;
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
                ... on Movie {
                    __typename
                }
                ... on TVShow {
                    __typename
                }
                ... on Episode {
                    __typename
                }
                ... on Person {
                    __typename
                }
            }
        `,
        nodes,
    );

    return decoded.map(node => pathLink(node.__typename, node.id));
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
