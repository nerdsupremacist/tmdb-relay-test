import type { SearchResult_result$key } from './__generated__/SearchResult_result.graphql';
import type { ReactNode } from 'react';

import React from 'react';
import { Box } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import MovieSearchResult from './MovieSearchResult';
import PersonSearchResult from './PersonSearchResult';
import { useResultRef, useSelect } from './SearchContext';

type Props = {
    result: SearchResult_result$key,
    selected?: boolean,
    index?: number,
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

    const ref = useResultRef(props.index ?? 0);
    const onMouseEnter = useSelect(props.index ?? 0);

    let inner: ReactNode;
    switch (result.__typename) {
    case 'Movie':
        inner = <MovieSearchResult movie={result} />;
        break;
    case 'Person':
        inner = <PersonSearchResult person={result} />;
        break;
    default:
        return null;
    }

    const selected = props.selected ?? false;

    return (
        <Box
            aria-selected={selected ? true : undefined}
            cursor="pointer"
            onMouseEnter={onMouseEnter}
            ref={ref}
            role="option"
            sx={{
                _selected: {
                    bg: 'teal.500',
                    color: 'white',
                    mark: {
                        color: 'white',
                        textDecoration: 'underline',
                    },
                },
                alignItems: 'center',
                display: 'flex',
                minH: 16,
                mt: 2,
                px: 4,
                py: 2,
                rounded: 'lg',
            }}
            width="100%"
        >
            {inner}
        </Box>
    );
}

export default React.forwardRef(SearchResult);
