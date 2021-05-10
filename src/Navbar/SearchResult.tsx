import type { SearchResult_result$key } from './__generated__/SearchResult_result.graphql';

import React from 'react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import MovieSearchResult from './MovieSearchResult';
import PersonSearchResult from './PersonSearchResult';

type Props = {
    result: SearchResult_result$key,
}

function SearchResult(props: Props) {
    const result = useFragment(
        graphql`
            fragment SearchResult_result on MovieOrTVOrPeople {
                __typename
                ... on Movie {
                    ...MovieSearchResult_movie
                }
                ... on Person {
                    ...PersonSearchResult_person
                }
            }
        `,
        props.result,
    );

    switch (result.__typename) {
    case 'Movie':
        return <MovieSearchResult movie={result} />;
    case 'Person':
        return <PersonSearchResult person={result} />;
    default:
        return null;
    }
}

export default SearchResult;
