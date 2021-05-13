
import type {
    SearchResultsListQuery as SearchResultsListQueryType,
} from './__generated__/SearchResultsListQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';

import SearchResultsListQuery from './__generated__/SearchResultsListQuery.graphql';

import React, { useEffect, useRef } from 'react';

import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LoadingSuspense from 'LoadingSuspense';
import SearchResultPaginatedList from './SearchResultPaginatedList';

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
                ...SearchResultPaginatedList_data @arguments(term: $term, count: 5)
            }
        `,
        props.data,
    );

    return (
        <SearchResultPaginatedList data={data}/>
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
