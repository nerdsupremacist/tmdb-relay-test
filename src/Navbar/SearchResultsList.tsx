
import type {
    SearchResultsListQuery as SearchResultsListQueryType,
} from './__generated__/SearchResultsListQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';

import SearchResultsListQuery from './__generated__/SearchResultsListQuery.graphql';

import React, { useEffect, useRef } from 'react';
import { VStack } from '@chakra-ui/react';

import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LoadingSuspense from 'LoadingSuspense';
import SearchResult from './SearchResult';

type LoadedProps = {
    data: PreloadedQuery<SearchResultsListQueryType>
}

type Props = {
    term: string
}

function SearchResultsList(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query SearchResultsListQuery($term: String!) {
                search(term: $term, first: 5) {
                    edges {
                        node {
                            ...SearchResult_result
                        }
                    }
                }
            }
        `,
        props.data,
    );

    const results = data.search.edges?.mapNotNull(edge => edge?.node) ?? [];

    return (
        <VStack align="start" spacing={4}>
            {
                results.map((result, index) => {
                    return <SearchResult key={`search_result_${index}`} result={result} />;
                })
            }
        </VStack>
    );
}

function SearchResultsListWrapper({ term }: Props) {
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<SearchResultsListQueryType>(SearchResultsListQuery);

    const error = useRef<ErrorBoundary>(null);

    useEffect(() => {
        error.current?.reset();
        loadQuery({ term });
        return () => {
            dispose();
        };
    }, [term, dispose, loadQuery]);

    return (
        <LoadingSuspense boundaryRef={error}>
            {data != null && <SearchResultsList data={data} />}
        </LoadingSuspense>
    );
}

export default SearchResultsListWrapper;
