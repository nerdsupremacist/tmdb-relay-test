
import type { GenreTag_genre$key } from './__generated__/GenreTag_genre.graphql';

import React from 'react';
import { Badge } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    data: GenreTag_genre$key,
}

function GenreTag(props: Props) {
    const data = useFragment(
        graphql`
            fragment GenreTag_genre on Genre {
                name
            }
        `,
        props.data,
    );

    return (
        <Badge borderRadius="xl" colorScheme="teal" px="2">
            {data.name}
        </Badge>
    );
}

export default GenreTag;
