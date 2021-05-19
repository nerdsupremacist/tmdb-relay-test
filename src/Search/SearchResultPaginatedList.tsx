import type { SearchResultPaginatedList_data$key } from './__generated__/SearchResultPaginatedList_data.graphql';
import type {
    SearchResultPaginatedListPaginationQuery,
} from './__generated__/SearchResultPaginatedListPaginationQuery.graphql';

import React from 'react';

import { usePaginationFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import InfiniteScrollview from 'InfiniteScrollview';
import { useLinks, useLoadingIndicatorRef, useSelected } from './SearchContext';
import SearchResult from './SearchResult';

import { usePathLinks } from 'routes';

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
                            ...routes_usePathLinks_nodes
                            ...SearchResult_result
                        }
                    }
                }
            }
        `,
        props.data,
    );

    const selected = useSelected();
    const nodes = data.search?.edges?.mapNotNull(edge => edge?.node) ?? [];

    const links = usePathLinks(nodes);
    useLinks(links);

    const loadingIndicatorRef = useLoadingIndicatorRef();

    return (
        <InfiniteScrollview
            align="start"
            loadMoreCount={5}
            loadingIndicatorRef={loadingIndicatorRef}
            {...connection}
        >
            {nodes.map((result, index) => {
                return (
                    <SearchResult
                        index={index}
                        key={`search_SearchResult_${index}`}
                        result={result}
                        selected={selected === index}
                    />
                );
            })}
        </InfiniteScrollview>
    );
}

export default SearchResultPaginatedList;
