import type { useNodePath_node, useNodePath_node$key } from './__generated__/useNodePath_node.graphql';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

export function usePath(type: useNodePath_node['__typename'], id?: string) {
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

export function useNodePath(node: useNodePath_node$key) {
    const decoded = useFragment(
        graphql`
            fragment useNodePath_node on Node {
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
        node,
    );

    return usePath(decoded.__typename, decoded.id);
}

