
import React from 'react';
import { useRef, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { AiFillHome } from 'react-icons/ai';
import { Link as InternalLink } from 'react-router-dom';
import {
    Button,
    Collapse,
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
    Spacer,
    Text,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { SearchIcon } from '@chakra-ui/icons';

import SearchResultsList from './SearchResultsList';

import { useDebounce } from 'use-debounce';
import { GRAPHQL_URL, REPO_URL } from 'utils/constants';

function Navbar() {
    const { toggleColorMode } = useColorMode();
    const icon = useColorModeValue(<MoonIcon />, <SunIcon />);

    const inputRef = useRef<HTMLInputElement>(null);
    const setFocus = () => { inputRef.current?.focus(); };

    const [isFocused, setIsFocused] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const [debounced] = useDebounce(searchTerm, 300);
    const [debouncedFocus] = useDebounce(isFocused, 300);

    useHotkeys('/', event => {
        event.preventDefault();
        if (!isFocused) {
            setSearchTerm('');
        }
        setFocus();
    }, {}, [isFocused]);

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
                        <InputGroup size="md">
                            <InputLeftElement pointerEvents="none">
                                <SearchIcon color="gray.300" />
                            </InputLeftElement>
                            <Input
                                onBlur={() => setIsFocused(false)}
                                onChange={event => setSearchTerm(event.target.value)}
                                onFocus={() => setIsFocused(true)}
                                placeholder="Search"
                                pr="4.5rem"
                                ref={inputRef}
                                type="text"
                                value={searchTerm}
                            />
                            <InputRightElement
                                pointerEvents="none">
                                <Kbd>/</Kbd>
                            </InputRightElement>
                        </InputGroup>
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
            <Collapse animateOpacity in={debouncedFocus && debounced.length > 1} unmountOnExit>
                <Container bg="whiteAlpha.200" marginTop={4} maxW="container.sm" padding={2} rounded="lg">
                    <SearchResultsList term={debounced} />
                </Container>
            </Collapse>
        </div>
    );
}

export default Navbar;
