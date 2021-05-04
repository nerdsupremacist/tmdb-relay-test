import type { SearchResultsListQuery as SearchResultsListQueryType } from './__generated__/SearchResultsListQuery.graphql';

import SearchResultsListQuery from './__generated__/SearchResultsListQuery.graphql';

import { Suspense } from 'react';

import { PreloadedQuery, usePreloadedQuery, loadQuery, useRelayEnvironment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Placeholder from './Placeholder';
import { VStack } from '@chakra-ui/react';
import MovieSearchResult from './MovieSearchResult';

type LoadedProps = {
    data: PreloadedQuery<SearchResultsListQueryType>
}

type Props = {
    term: string
}

function LoadedSearchResultsList(props: LoadedProps) {
    const data = usePreloadedQuery<SearchResultsListQueryType>(
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
        <VStack spacing={4} align="start">
            {
                data.movies?.search.edges?.map((edge, index) => edge?.node != null && <MovieSearchResult data={edge.node} key={`search_result_${index}`}/>)
            }
        </VStack>
    );
}

function SearchResultsList({ term }: Props) {
    const environment = useRelayEnvironment();

    const data = loadQuery<SearchResultsListQueryType>(environment, SearchResultsListQuery, { term })

    return (
        <Suspense fallback={<Placeholder />}>
            <LoadedSearchResultsList data={data} />
        </Suspense>
    );
}

export default SearchResultsList;
