import type { RecommendedShows_show$key } from './__generated__/RecommendedShows_show.graphql';
import type { RecommendedShowsPaginationQuery } from './__generated__/RecommendedShowsPaginationQuery.graphql';

import React from 'react';

import { usePaginationFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import InfiniteScrollview from 'InfiniteScrollview';
import ShowListItem from 'ShowListItem';

type Props = {
    show: RecommendedShows_show$key,
}

function RecommendedShows(props: Props) {
    const {
        data,
        ...connection
    // eslint-disable-next-line relay/generated-flow-types
    } = usePaginationFragment<RecommendedShowsPaginationQuery, RecommendedShows_show$key>(
        graphql`
            fragment RecommendedShows_show on TVShow
            @argumentDefinitions(
                count: { type: "Int!", defaultValue: 20 }
                cursor: { type: "String" }
            )
            @refetchable(queryName: "RecommendedShowsPaginationQuery") {
                recommendations(
                    first: $count, 
                    after: $cursor
                ) @connection(key: "RecommendedShows_show_recommendations") {
                    edges {
                        node {
                            ...ShowListItem_show
                        }
                    }
                }
            }
        `,
        props.show,
    );

    const nodes = data.recommendations.edges?.mapNotNull(edge => edge?.node) ?? [];

    return (
        <InfiniteScrollview
            align="start"
            maxW="100%"
            padding={2}
            scrollDirection="horizontal"
            {...connection}
        >
            {nodes.map((show, index) => <ShowListItem key={`recommendations_ShowListItem_${index}`} show={show}/>)}
        </InfiniteScrollview>
    );
}

export default RecommendedShows;
