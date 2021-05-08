
import type {
    SearchResultsListQuery as SearchResultsListQueryType,
} from './__generated__/SearchResultsListQuery.graphql';

import SearchResultsListQuery from './__generated__/SearchResultsListQuery.graphql';

import React from 'react';
import { VStack } from '@chakra-ui/react';

import { loadQuery, PreloadedQuery, usePreloadedQuery, useRelayEnvironment } from 'react-relay';
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
    const environment = useRelayEnvironment();
    const data = loadQuery<SearchResultsListQueryType>(environment, SearchResultsListQuery, { term });

    return (
        <LoadingSuspense>
            <SearchResultsList data={data} />
        </LoadingSuspense>
    );
}

export default SearchResultsListWrapper;
