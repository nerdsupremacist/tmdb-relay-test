
import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { AiFillHome } from 'react-icons/ai';
import { Link as InternalLink } from 'react-router-dom';
import {
    Button,
    Container,
    Flex,
    HStack,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Kbd,
    Link,
    Modal,
    ModalContent,
    ModalOverlay,
    Spacer,
    Text,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { SearchIcon } from '@chakra-ui/icons';

import Search from 'Search';

import { GRAPHQL_URL, REPO_URL } from 'utils/constants';

function Navbar() {
    const { toggleColorMode } = useColorMode();
    const icon = useColorModeValue(<MoonIcon />, <SunIcon />);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useHotkeys('/', event => {
        event.preventDefault();
        onOpen();
    }, {}, [onOpen]);

    return (
        <div>
            <Container maxW="container.xl" paddingTop={8}>
                <Flex>
                    <HStack align="center" flex={1} justify="left" paddingLeft={8}>
                        <InternalLink to="/">
                            <Button variant="ghost">
                                <Icon as={AiFillHome}/>
                            </Button>
                        </InternalLink>
                    </HStack>
                    <Container maxW="container.sm">
                        <Button onClick={onOpen} role="search" variant="unstyled" w="100%">
                            <InputGroup pointerEvents="none" size="md">
                                <InputLeftElement pointerEvents="none">
                                    <SearchIcon color="gray.300" />
                                </InputLeftElement>
                                <Input
                                    placeholder="Search"
                                    pr="4.5rem"
                                    type="text"
                                />
                                <InputRightElement
                                    pointerEvents="none">
                                    <Kbd>/</Kbd>
                                </InputRightElement>
                            </InputGroup>
                        </Button>
                    </Container>
                    <HStack align="center" flex={1} justify="right" paddingRight={8}>
                        <Spacer />
                        <Button onClick={toggleColorMode} variant="ghost">
                            {icon}
                        </Button>
                        <Link
                            href={REPO_URL}
                            style={{
                                textDecoration: 'none',
                            }}
                        >
                            <Button variant="ghost">
                                <Text fontSize="md" fontWeight="semibold">
                                    GitHub
                                </Text>
                            </Button>
                        </Link>
                        <Link
                            href={GRAPHQL_URL}
                            style={{
                                textDecoration: 'none',
                            }}
                        >
                            <Button variant="ghost">
                                <Text fontSize="md" fontWeight="semibold">
                                    API
                                </Text>
                            </Button>
                        </Link>
                    </HStack>
                </Flex>
            </Container>
            <Modal
                closeOnEsc
                isOpen={isOpen}
                onClose={onClose}
                size="xl"
            >
                <ModalOverlay />
                <ModalContent>
                    <Search onClickOnResults={onClose}/>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default Navbar;
