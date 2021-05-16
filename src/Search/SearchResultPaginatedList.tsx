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
                            __typename
                            ...SearchResult_result
                            ... on Movie {
                                id
                            }
                            ... on Person {
                                id
                            }
                            ... on TVShow {
                                id
                            }
                        }
                    }
                }
            }
        `,
        props.data,
    );

    const selected = useSelected();
    const nodes = data.search?.edges?.mapNotNull(edge => edge?.node) ?? [];

    useLinks(() => {
        return nodes.map(node => {
            switch (node.__typename) {
            case 'Movie':
                return `/movie/${node.id}`;
            case 'Person':
                return `/person/${node.id}`;
            case 'TVShow':
                return `/show/${node.id}`;
            default:
                return null;
            }
        });
    }, [nodes]);

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
