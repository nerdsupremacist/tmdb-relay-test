import type { TopRatedShows_data$key } from './__generated__/TopRatedShows_data.graphql';
import type { TopRatedShowsPaginationQuery } from './__generated__/TopRatedShowsPaginationQuery.graphql';

import React from 'react';

import { usePaginationFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import InfiniteScrollview from 'InfiniteScrollview';
import ShowListItem from 'ShowListItem';

type Props = {
    data: TopRatedShows_data$key,
}

function TopRatedShows(props: Props) {
    const {
        data,
        ...connection
    // eslint-disable-next-line relay/generated-flow-types
    } = usePaginationFragment<TopRatedShowsPaginationQuery, TopRatedShows_data$key>(
        graphql`
            fragment TopRatedShows_data on Query
            @argumentDefinitions(
                count: { type: "Int!", defaultValue: 20 }
                cursor: { type: "String" }
            )
            @refetchable(queryName: "TopRatedShowsPaginationQuery") {
                tv {
                    topRated(first: $count, after: $cursor) @connection(key: "RopRatedShows_data_topRated") {
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

    const nodes = data.tv.topRated.edges?.mapNotNull(edge => edge?.node) ?? [];

    return (
        <InfiniteScrollview
            align="start"
            maxW="100%"
            padding={2}
            scrollDirection="horizontal"
            {...connection}
        >
            {nodes.map((show, index) => <ShowListItem key={`topRated_ShowListItem_${index}`} show={show}/>)}
        </InfiniteScrollview>
    );
}

export default TopRatedShows;
