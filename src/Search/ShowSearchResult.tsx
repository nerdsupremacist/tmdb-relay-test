import type { ShowSearchResult_show$key } from './__generated__/ShowSearchResult_show.graphql';

import React from 'react';
import { HStack, Image, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import ShowLinkContainer from 'ShowLinkContainer/ShowLinkContainer';
import { useOnClickOnResults } from './SearchContext';

import { POSTER_PLACEHOLDER } from 'utils/constants';

type Props = {
    show: ShowSearchResult_show$key,
}

function ShowSearchResult(props: Props) {
    const onClick = useOnClickOnResults();
    const show = useFragment(
        graphql`
            fragment ShowSearchResult_show on TVShow {
                ...ShowLinkContainer_show
                name
                overview
                poster(size: W185)
            }
        `,
        props.show,
    );

    const poster = show.poster ?? POSTER_PLACEHOLDER;

    return (
        <ShowLinkContainer onClick={onClick} show={show}>
            <HStack align="start" spacing={4}>
                <Image
                    borderRadius="lg"
                    borderWidth="1px"
                    h="150px"
                    minH="150px"
                    minW="100px"
                    objectFit="cover"
                    overflow="hidden"
                    shadow="xl"
                    src={poster}
                    w="100px"
                />
                <VStack align="baseline" spacing="0">
                    <Text fontSize="md" fontWeight="bold">
                        {show.name}
                    </Text>
                    <Text fontSize="xs" fontWeight="light" noOfLines={4}>
                        {show.overview}
                    </Text>
                </VStack>
            </HStack>
        </ShowLinkContainer>
    );
}

export default ShowSearchResult;
