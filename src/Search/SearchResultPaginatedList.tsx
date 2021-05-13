import type { SearchResultPaginatedList_data$key } from './__generated__/SearchResultPaginatedList_data.graphql';
import type {
    SearchResultPaginatedListPaginationQuery,
} from './__generated__/SearchResultPaginatedListPaginationQuery.graphql';

import React from 'react';

import { usePaginationFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import InfiniteScrollview from 'InfiniteScrollview';
import SearchResult from './SearchResult';

type Props = {
    data: SearchResultPaginatedList_data$key,
}

function SearchResultPaginatedList(props: Props) {
    const {
        data,
        ...connection
    // eslint-disable-next-line relay/generated-flow-types
    } = usePaginationFragment<SearchResultPaginatedListPaginationQuery, SearchResultPaginatedList_data$key>(
        graphql`
            fragment SearchResultPaginatedList_data on Query
            @argumentDefinitions(
                term: { type: "String!" }
                count: { type: "Int!", defaultValue: 20 }
                cursor: { type: "String" }
            )
            @refetchable(queryName: "SearchResultPaginatedListPaginationQuery") {
                search(
                    term: $term, 
                    first: $count, 
                    after: $cursor
                ) @connection(key: "SearchResultPaginatedList_data_search") {
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

    if (data.search == null) {
        return null;
    }

    const nodes = data.search.edges?.mapNotNull(edge => edge?.node) ?? [];

    return (
        <InfiniteScrollview align="start" {...connection} loadMoreCount={5}>
            {nodes.map((result, index) => <SearchResult key={`search_SearchResult_${index}`} result={result}/>)}
        </InfiniteScrollview>
    );
}

export default SearchResultPaginatedList;
