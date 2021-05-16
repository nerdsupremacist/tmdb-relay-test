import type { PopularShows_data$key } from './__generated__/PopularShows_data.graphql';
import type { PopularShowsPaginationQuery } from './__generated__/PopularShowsPaginationQuery.graphql';

import React from 'react';

import { usePaginationFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import InfiniteScrollview from 'InfiniteScrollview';
import ShowListItem from 'ShowListItem';

type Props = {
    data: PopularShows_data$key,
}

function PopularShows(props: Props) {
    const {
        data,
        ...connection
    // eslint-disable-next-line relay/generated-flow-types
    } = usePaginationFragment<PopularShowsPaginationQuery, PopularShows_data$key>(
        graphql`
            fragment PopularShows_data on Query
            @argumentDefinitions(
                count: { type: "Int!", defaultValue: 20 }
                cursor: { type: "String" }
            )
            @refetchable(queryName: "PopularShowsPaginationQuery") {
                tv {
                    popular(first: $count, after: $cursor) @connection(key: "PopularShows_data_popular") {
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

    const nodes = data.tv.popular.edges?.mapNotNull(edge => edge?.node) ?? [];

    return (
        <InfiniteScrollview
            align="start"
            maxW="100%"
            padding={2}
            scrollDirection="horizontal"
            {...connection}
        >
            {nodes.map((show, index) => <ShowListItem key={`popular_ShowListItem_${index}`} show={show}/>)}
        </InfiniteScrollview>
    );
}

export default PopularShows;
