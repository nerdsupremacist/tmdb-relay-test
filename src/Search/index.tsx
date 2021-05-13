
import React, { useState } from 'react';
import { Collapse, Container, Input, InputGroup, InputLeftElement, VStack } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import { SearchContextProvider } from './SearchContext';
import SearchResultsList from './SearchResultsList';

import { useDebounce } from 'use-debounce';

type Props = {
    onClickOnResults?: () => void
}

function Search(props: Props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [debounced] = useDebounce(searchTerm, 300);

    return (
        <SearchContextProvider {...props}>
            <VStack spacing={4}>
                <InputGroup size="lg">
                    <InputLeftElement pointerEvents="none">
                        <SearchIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                        autoFocus
                        onChange={event => setSearchTerm(event.target.value)}
                        placeholder="Search"
                        pr="4.5rem"
                        type="text"
                        value={searchTerm}
                        variant="filled"
                    />
                </InputGroup>
            
                <Collapse animateOpacity in={debounced.length > 1} unmountOnExit>
                    <Container paddingBottom={4} paddingLeft={4} paddingRight={4}>
                        <SearchResultsList term={debounced} />
                    </Container>
                </Collapse>
            </VStack>
        </SearchContextProvider>
    );
}

export default Search;
