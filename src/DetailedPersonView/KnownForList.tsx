import type { KnownForList_person$key } from './__generated__/KnownForList_person.graphql';

import React from 'react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import HorizonalScrollview from 'HorizonalScrollview';
import MovieOrShowResult from './MovieOrShowResult';

type Props = {
    person: KnownForList_person$key,
}

function KnownForList(props: Props) {
    const person = useFragment(
        graphql`
            fragment KnownForList_person on Person {
                knownFor {
                    ...MovieOrShowResult_result
                }
            }
        `,
        props.person,
    );

    return (
        <HorizonalScrollview w="100%">
            {
                person.knownFor.map((result, index) => {
                    return (
                        <MovieOrShowResult
                            key={`movie_or_show_result_known_for${index}`}
                            result={result}
                        />
                    );
                })
            }
        </HorizonalScrollview>
    );
}

export default KnownForList;
