import type { SimilarShows_show$key } from './__generated__/SimilarShows_show.graphql';
import type { SimilarShowsPaginationQuery } from './__generated__/SimilarShowsPaginationQuery.graphql';

import React from 'react';

import { usePaginationFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import InfiniteScrollview from 'InfiniteScrollview';
import ShowListItem from 'ShowListItem';

type Props = {
    show: SimilarShows_show$key,
}

function SimilarShows(props: Props) {
    const {
        data,
        ...connection
    // eslint-disable-next-line relay/generated-flow-types
    } = usePaginationFragment<SimilarShowsPaginationQuery, SimilarShows_show$key>(
        graphql`
            fragment SimilarShows_show on TVShow
            @argumentDefinitions(
                count: { type: "Int!", defaultValue: 20 }
                cursor: { type: "String" }
            )
            @refetchable(queryName: "SimilarShowsPaginationQuery") {
                similar(first: $count, after: $cursor) @connection(key: "SimilarShows_show_similar") {
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

    const nodes = data.similar.edges?.compactMap(edge => edge?.node) ?? [];

    return (
        <InfiniteScrollview
            align="start"
            maxW="100%"
            padding={2}
            scrollDirection="horizontal"
            {...connection}
        >
            {nodes.map((show, index) => <ShowListItem key={`similar_ShowListItem_${index}`} show={show}/>)}
        </InfiniteScrollview>
    );
}

export default SimilarShows;
