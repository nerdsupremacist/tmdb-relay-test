
import React from 'react';
import { useRef, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { Collapse, Container, Input, InputGroup, InputLeftElement, InputRightElement, Kbd } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import SearchResultsList from './SearchResultsList';

import { useDebounce } from 'use-debounce';

function Navbar() {
    const inputRef = useRef<HTMLInputElement>(null);
    const setFocus = () => { inputRef.current?.focus() };

    const [isFocused, setIsFocused] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const [debounced] = useDebounce(searchTerm, 300);
    const [debouncedFocus] = useDebounce(isFocused, 300);

    useHotkeys('/', (event) => {
        event.preventDefault();
        if (!isFocused) {
            setSearchTerm('');
        }
        setFocus();
    }, {}, [isFocused]);

    return (
        <div>
            <Container maxW="container.sm" paddingTop={8}>
                <InputGroup size="md">
                    <InputLeftElement pointerEvents="none">
                        <SearchIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                        onBlur={() => setIsFocused(false)}
                        onChange={(event) => setSearchTerm(event.target.value)}
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
            <Collapse animateOpacity in={debouncedFocus && debounced.length > 1} unmountOnExit>
                <Container bg="whiteAlpha.200" marginTop={4} maxW="container.sm" padding={2} rounded="lg">
                    <SearchResultsList term={debounced} />
                </Container>
            </Collapse>
        </div>
    );
}

export default Navbar;