
import {useRef, useState} from 'react';

import { SearchIcon } from '@chakra-ui/icons';
import { Kbd, InputGroup, Input, InputLeftElement, InputRightElement, Container, Collapse } from '@chakra-ui/react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useDebounce } from 'use-debounce';

import SearchResultsList from './SearchResultsList';

function Navbar() {
    const inputRef = useRef<HTMLInputElement>(null);
    const setFocus = () => { inputRef.current?.focus() };

    const [isFocused, setIsFocused] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const [debounced] = useDebounce(searchTerm, 300);
    const [debouncedFocus] = useDebounce(isFocused, 300);
    
    useHotkeys('/', (event) => {
        event.preventDefault();
        if (!isFocused) {
            setSearchTerm("");
        }
        setFocus();
    });

    useHotkeys('Esc', (event) => {
        if (isFocused) {
            event.preventDefault();
            setFocus();
        }
    });

    return (
        <div>
            <Container maxW="container.sm" paddingTop={8}>
                <InputGroup size="md">
                    <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="gray.300" />}
                    />
                    <Input
                        pr="4.5rem"
                        type="text"
                        placeholder="Search"
                        ref={inputRef}
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                    <InputRightElement
                        pointerEvents="none">
                        <Kbd>/</Kbd>
                    </InputRightElement>
                </InputGroup>
            </Container>
            <Collapse in={debouncedFocus && debounced.length > 1} animateOpacity unmountOnExit>
                <Container maxW="container.sm" marginTop={4} bg="whiteAlpha.200" rounded="lg" padding={2}>
                    <SearchResultsList term={debounced}/>
                </Container>
            </Collapse>
        </div>
    );
}

export default Navbar;