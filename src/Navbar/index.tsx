
import React, { useEffect, useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useHotkeys } from 'react-hotkeys-hook';
import { FaGithub, FaHome } from 'react-icons/fa';
import { SiGraphql } from 'react-icons/si';
import { Link as InternalLink } from 'react-router-dom';
import {
    Box,
    Button,
    chakra,
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
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import Search from 'Search';

import useRect from 'useRect';

import { useViewportScroll } from 'framer-motion';
import { GRAPHQL_URL, REPO_URL } from 'utils/constants';

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [headerRef, { height }] = useRect();
    const [opacity, setOpacity] = useState(0);

    useHotkeys('/', event => {
        event.preventDefault();
        onOpen();
    }, {}, [onOpen]);

    const { scrollY } = useViewportScroll();

    useEffect(() => {
        return scrollY.onChange(() => {
            if (height > 0) {
                setOpacity(Math.min(Math.max(scrollY.get() / height, 0), 1));
            } else {
                setOpacity(0);
            }
        });
    }, [scrollY, setOpacity, height]);

    const backgroundColor = useColorModeValue('white', 'gray.800');
    const gradientColor = useColorModeValue('#FFFFFF', '#1A202C');
    const gradientBorderColor = `${gradientColor}FF`;
    const gradientInnerColor = `${gradientColor}00`;

    return (
        <>
            <chakra.header
                bg={backgroundColor}
                left="0"
                pos="sticky"
                ref={headerRef}
                right="0"
                top="0"
                width="full"
                zIndex="3"
            >
                <Container maxW="container.xl" paddingBottom={4} paddingTop={8}>
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
                <Box
                    h="20px"
                    marginTop={0}
                    pointerEvents="none"
                    position="absolute"
                    style={{
                        backgroundImage:
                            `linear-gradient(to bottom, ${gradientBorderColor} 30%, ${gradientInnerColor})`,
                        opacity,
                    }}
                    w="100%"
                />
            </chakra.header>
        </>
    );
}

export default Navbar;
