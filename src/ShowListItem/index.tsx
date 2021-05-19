import type { ShowListItem_show$key } from './__generated__/ShowListItem_show.graphql';

import React from 'react';
import { Image, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LinkContainer from 'LinkContainer';

import { POSTER_PLACEHOLDER } from 'utils/constants';

type Props = {
    show: ShowListItem_show$key,
}

function ShowListItem(props: Props) {
    const show = useFragment(
        graphql`
            fragment ShowListItem_show on TVShow {
                ...LinkContainer_node
                name
                poster(size: W154)
            }
        `,
        props.show,
    );
    const poster = show.poster ?? POSTER_PLACEHOLDER;

    return (
        <LinkContainer node={show}>
            <VStack>
                <Image borderRadius="lg" h="220px" maxW="150px" minW="150px" shadow="xl" src={poster}/>
                <VStack spacing={0}>
                    <Text fontSize="sm" fontWeight="semibold" noOfLines={2} textAlign="center">{show.name}</Text>
                </VStack>
            </VStack>
        </LinkContainer>
    );
}

export default ShowListItem;
