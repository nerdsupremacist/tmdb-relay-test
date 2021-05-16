import type { TrendingShows_data$key } from './__generated__/TrendingShows_data.graphql';
import type { TrendingShowsPaginationQuery } from './__generated__/TrendingShowsPaginationQuery.graphql';

import React from 'react';

import { usePaginationFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import InfiniteScrollview from 'InfiniteScrollview';
import ShowListItem from 'ShowListItem';

type Props = {
    data: TrendingShows_data$key,
}

function TrendingShows(props: Props) {
    const {
        data,
        ...connection
    // eslint-disable-next-line relay/generated-flow-types
    } = usePaginationFragment<TrendingShowsPaginationQuery, TrendingShows_data$key>(
        graphql`
            fragment TrendingShows_data on Query
            @argumentDefinitions(
                count: { type: "Int!", defaultValue: 20 }
                cursor: { type: "String" }
            )
            @refetchable(queryName: "TrendingShowsPaginationQuery") {
                tv {
                    trending(first: $count, after: $cursor) @connection(key: "TrendingShows_data_trending") {
                        edges {
                            node {
                                ...ShowListItem_show
                            }
                        }
                    }
                }
            }
        `,
        props.data,
    );

    const nodes = data.tv.trending.edges?.mapNotNull(edge => edge?.node) ?? [];

    return (
        <InfiniteScrollview
            align="start"
            maxW="100%"
            padding={2}
            scrollDirection="horizontal"
            {...connection}
        >
            {nodes.map((show, index) => <ShowListItem key={`trending_ShowListItem_${index}`} show={show}/>)}
        </InfiniteScrollview>
    );
}

export default TrendingShows;
