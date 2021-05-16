import type { useIsActor_person$key } from './__generated__/useIsActor_person.graphql';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

function useIsActor(person: useIsActor_person$key) {
    const decoded = useFragment(
        graphql`
            fragment useIsActor_person on Person {
                knownForDepartment
            }
        `,
        person,
    );

    return decoded.knownForDepartment === 'Acting';
}

export default useIsActor;
