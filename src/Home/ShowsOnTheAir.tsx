import type { ShowsOnTheAir_data$key } from './__generated__/ShowsOnTheAir_data.graphql';
import type { ShowsOnTheAirPaginationQuery } from './__generated__/ShowsOnTheAirPaginationQuery.graphql';

import React from 'react';

import { usePaginationFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import InfiniteScrollview from 'InfiniteScrollview';
import ShowListItem from 'ShowListItem';

type Props = {
    data: ShowsOnTheAir_data$key,
}

function ShowsOnTheAir(props: Props) {
    const {
        data,
        ...connection
    // eslint-disable-next-line relay/generated-flow-types
    } = usePaginationFragment<ShowsOnTheAirPaginationQuery, ShowsOnTheAir_data$key>(
        graphql`
            fragment ShowsOnTheAir_data on Query
            @argumentDefinitions(
                count: { type: "Int!", defaultValue: 20 }
                cursor: { type: "String" }
            )
            @refetchable(queryName: "ShowsOnTheAirPaginationQuery") {
                tv {
                    onTheAir(first: $count, after: $cursor) @connection(key: "ShowsOnTheAir_data_onTheAir") {
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

    const nodes = data.tv.onTheAir.edges?.compactMap(edge => edge?.node) ?? [];

    return (
        <InfiniteScrollview
            align="start"
            maxW="100%"
            padding={2}
            scrollDirection="horizontal"
            {...connection}
        >
            {nodes.map((show, index) => <ShowListItem key={`onTheAir_ShowListItem_${index}`} show={show}/>)}
        </InfiniteScrollview>
    );
}

export default ShowsOnTheAir;
