import type { useKnownForDescription_person$key } from './__generated__/useKnownForDescription_person.graphql';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

function useKnownForDescription(person: useKnownForDescription_person$key) {
    const decoded = useFragment(
        graphql`
            fragment useKnownForDescription_person on Person {
                knownFor {
                    __typename
                    ... on Movie {
                        title
                    }
                    ... on TVShow {
                        name
                    }
                }
            }
        `,
        person,
    );

    const names = decoded.knownFor.compactMap(item => {
        switch (item.__typename) {
        case 'Movie':
            return item.title;
        case 'TVShow':
            return item.name;
        default:
            return null;
        }
    });

    if (names.length < 1) {
        return null;
    }

    return names.join(', ');
}

export default useKnownForDescription;
