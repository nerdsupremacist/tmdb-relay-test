
import type {
    SearchResultsListQuery as SearchResultsListQueryType,
} from './__generated__/SearchResultsListQuery.graphql';

import SearchResultsListQuery from './__generated__/SearchResultsListQuery.graphql';

import React from 'react';
import { VStack } from '@chakra-ui/react';

import { loadQuery, PreloadedQuery, usePreloadedQuery, useRelayEnvironment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LoadingSuspense from 'LoadingSuspense';
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
                                ...MovieSearchResult_movie
                            }
                        }
                    }
                }
            }
        `,
        props.data,
    );

    const results = data.movies.search.edges?.mapNotNull(edge => edge?.node) ?? [];

    return (
        <VStack align="start" spacing={4}>
            {
                results.map((movie, index) => {
                    return <MovieSearchResult key={`search_result_${index}`} movie={movie} />;
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
