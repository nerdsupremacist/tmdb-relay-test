
import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useHotkeys } from 'react-hotkeys-hook';
import { FaGithub, FaHome } from 'react-icons/fa';
import { SiGraphql } from 'react-icons/si';
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
    Tooltip,
    useColorMode,
    useDisclosure,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import Search from 'Search';

import { GRAPHQL_URL, REPO_URL } from 'utils/constants';

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
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
                                <Icon as={FaHome}/>
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
                    <HStack flex={1} justify="right" paddingRight={8}>
                        <Spacer />
                        <HStack align="center" >
                            <DarkModeToggle
                                checked={colorMode === 'dark'}
                                onChange={toggleColorMode}
                                size={50}
                                speed={2.6}
                            />
                            <Spacer w="1px"/>
                            <Tooltip bg="gray.300" color="black" hasArrow label="GraphQL API" placement="bottom">
                                <Link
                                    href={GRAPHQL_URL}
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                >
                                    <Button variant="ghost">
                                        <Text fontSize="md" fontWeight="semibold">
                                            <Icon as={SiGraphql}/>
                                        </Text>
                                    </Button>
                                </Link>
                            </Tooltip>
                            <Tooltip bg="gray.300" color="black" hasArrow label="GitHub Repo" placement="bottom">
                                <Link
                                    href={REPO_URL}
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                >
                                    <Button variant="ghost">
                                        <Icon as={FaGithub}/>
                                    </Button>
                                </Link>
                            </Tooltip>
                        </HStack>
                    </HStack>
                </Flex>
            </Container>
            <Modal
                closeOnEsc
                isOpen={isOpen}
                onClose={onClose}
                scrollBehavior="inside"
                size="xl"
            >
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
                >
                    <Search onClickOnResults={onClose}/>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default Navbar;
