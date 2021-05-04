
import type { GenreTag_Genre$key } from './__generated__/GenreTag_Genre.graphql';

import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay';

import { Badge } from '@chakra-ui/react'; 

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
        <Badge borderRadius="xl" px="2" colorScheme="teal">
            {data.name}
        </Badge>
    );
}

export default GenreTag;