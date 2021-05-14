
import React, { useRef, useState } from 'react';
import {
    Box,
    Collapse,
    Container,
    Input,
    InputGroup,
    InputLeftElement,
    ModalBody,
    useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import { SearchContextProvider } from './SearchContext';
import SearchResultsList from './SearchResultsList';

import useSearchList from './useSearchList';

import { useDebounce } from 'use-debounce';

type Props = {
    onClickOnResults?: () => void
}

function Search(props: Props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [debounced] = useDebounce(searchTerm, 300);
    const bodyRef = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(0);
    const onScroll = () => {
        if (bodyRef.current != null) {
            const offset = bodyRef.current?.scrollTop;
            setOpacity(Math.min(Math.max(offset / 40, 0), 1));
        } else {
            setOpacity(0);
        }
    };

    const color = useColorModeValue('#FFFFFF', '#2D3848');
    const borderColor = `${color}FF`;
    const innerColor = `${color}00`;

    const { onKeyDown, ...searchList } = useSearchList(props.onClickOnResults);

    return (
        <SearchContextProvider {...props} {...searchList}>
            <InputGroup size="lg">
                <InputLeftElement h="68px" paddingLeft={4} pointerEvents="none" >
                    <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input
                    aria-autocomplete="list"
                    autoComplete="off"
                    autoCorrect="off"
                    autoFocus
                    onChange={event => setSearchTerm(event.target.value)}
                    onKeyDown={onKeyDown}
                    placeholder="Search"
                    pr="4.5rem"
                    spellCheck="false"
                    sx={{
                        border: 'transparent',
                        fontWeight: 'medium',
                        h: '68px',
                        outline: 0,
                        pl: '68px',
                    }}
                    type="text"
                    value={searchTerm}
                    variant="filled"
                />
            </InputGroup>
            <ModalBody maxH="66vh" onScroll={onScroll} p="0" ref={bodyRef}>
                <Collapse animateOpacity in={debounced.length > 1} unmountOnExit>
                    <Box
                        h="20px"
                        marginTop={-1}
                        pointerEvents="none"
                        position="absolute"
                        style={{
                            backgroundImage: `linear-gradient(to bottom, ${borderColor} 30%, ${innerColor})`,
                            opacity,
                        }}
                        w="100%"
                    />
                    <Container paddingBottom={4} paddingLeft={2} paddingRight={2}>
                        <SearchResultsList term={debounced} />
                    </Container>
                </Collapse>
            </ModalBody>
        </SearchContextProvider>
    );
}

export default Search;
