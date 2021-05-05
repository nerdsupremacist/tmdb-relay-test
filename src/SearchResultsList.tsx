
import { VStack } from '@chakra-ui/react';
import { graphql } from 'babel-plugin-relay/macro';
import React from 'react';
import { loadQuery, PreloadedQuery, usePreloadedQuery, useRelayEnvironment } from 'react-relay';

import type { SearchResultsListQuery as SearchResultsListQueryType } from './__generated__/SearchResultsListQuery.graphql';
import SearchResultsListQuery from './__generated__/SearchResultsListQuery.graphql';
import LoadingSuspense from './LoadingSuspense';
import MovieSearchResult from './MovieSearchResult';

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
                movies {
                    search(term: $term, first: 5) {
                        edges {
                            node {
                                ...MovieSearchResult_IMovie
                            }
                        }
                    }
                }
            }
        `,
        props.data
    );

    return (
        <VStack align="start" spacing={4}>
            {
                data.movies?.search.edges?.map((edge, index) => edge?.node != null && <MovieSearchResult data={edge.node} key={`search_result_${index}`} />)
            }
        </VStack>
    );
}

function SearchResultsListWrapper({ term }: Props) {
    const environment = useRelayEnvironment();
    const data = loadQuery<SearchResultsListQueryType>(environment, SearchResultsListQuery, { term })

    return (
        <LoadingSuspense>
            <SearchResultsList data={data} />
        </LoadingSuspense>
    );
}

export default SearchResultsListWrapper;