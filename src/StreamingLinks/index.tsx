import type { StreamingLinks_links$key } from './__generated__/StreamingLinks_links.graphql';

import React from 'react';
import { FaSearch } from 'react-icons/fa';
import {
    Box,
    Center,
    HStack,
    Icon,
    Link,
    Modal,
    ModalContent,
    ModalOverlay,
    Text,
    Tooltip,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import StreamingLink from 'StreamingLink';
import StreamingLinksSearcher from 'StreamingLinksSearcher';

type Props = {
    links: StreamingLinks_links$key,
    id: string,
}

function StreamingLinks(props: Props) {
    const links = useFragment(
        graphql`
            fragment StreamingLinks_links on StreamingOption @relay(plural: true) {
                provider {
                    __typename
                }
                ...StreamingLink_option
            }
        `,
        props.links,
    );

    const { isOpen, onOpen, onClose } = useDisclosure();

    const options = links.filter(option => option.provider != null) ?? [];

    if (options.length > 0) {
        return (
            <>
                <HStack align="start" spacing={4}>
                    {
                        options.slice(0, 5).map((option, index) => {
                            return <StreamingLink key={`streaming_link_${index}`} option={option} />;
                        })
                    }
                    <Tooltip bg="gray.300" color="black" hasArrow label="Find the right place to watch it">
                        <Link onClick={onOpen}>
                            <VStack align="center" spacing="0">
                                <Box
                                    alignContent="center"
                                    alignItems="center"
                                    borderRadius="xl"
                                    borderWidth="1px"
                                    h="50"
                                    minW="50"
                                    w="50"
                                >
                                    <Center>
                                        <Icon as={FaSearch} h="50" w="50" />
                                    </Center>
                                </Box>
                                <Text fontSize="sm" fontWeight="semibold" paddingTop="2">
                            Search
                                </Text>
                                <Text fontSize="sm" fontWeight="light">
                            Streaming
                                </Text>
                            </VStack>
                        </Link>
                    </Tooltip>
                </HStack>
                <Text align="right" fontSize="sm" fontWeight="light" w="100%">
                    Links powered by <Link href="">JustWatch</Link>
                </Text>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />

                    <ModalContent
                        aria-expanded="true"
                        aria-haspopup="listbox"
                        maxW="600px"
                        overflow="hidden"
                        role="combobox"
                        rounded="lg"
                        shadow="lg"
                        top="4vh"
                        unmountOnExit
                    >
                        <StreamingLinksSearcher id={props.id}/>
                    </ ModalContent>
                </Modal>
            </>
        );
    }

    return null;
}

export default StreamingLinks;
