
import { Badge } from '@chakra-ui/react';
import { graphql } from 'babel-plugin-relay/macro'
import React from 'react';
import { useFragment } from 'react-relay';

import type { GenreTag_Genre$key } from './__generated__/GenreTag_Genre.graphql';

type Props = {
    data: GenreTag_Genre$key,
}

function GenreTag(props: Props) {
    const data = useFragment(
        graphql`
            fragment GenreTag_Genre on Genre {
                name
            }
        `,
        props.data
    );

    return (
        <Badge borderRadius="xl" colorScheme="teal" px="2">
            {data.name}
        </Badge>
    );
}

export default GenreTag;