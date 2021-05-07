import type { RelatedMovieList_connection$key } from './__generated__/RelatedMovieList_connection.graphql';

import React from 'react';
import { HStack } from '@chakra-ui/layout';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import RelatedMovie from './RelatedMovie';

type Props = {
    connection: RelatedMovieList_connection$key,
}

function RelatedMovieList(props: Props) {
    const connection = useFragment(
        graphql`
            fragment RelatedMovieList_connection on MovieConnection {
                edges {
                    node {
                        ...RelatedMovie_movie
                    }
                }
            }
        `,
        props.connection,
    );

    const movies = connection.edges?.mapNotNull(edge => edge?.node) ?? [];

    return (
        <HStack align="start" maxW="100%" overflowY="scroll" padding={2}>
            {
                movies.map((movie, index) => {
                    return <RelatedMovie key={`recommended_movie_${index}`} movie={movie} />;
                })
            }
        </HStack>
    );
}

export default RelatedMovieList;
