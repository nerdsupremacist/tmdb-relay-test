
import React from 'react';
import { Center, Spinner } from '@chakra-ui/react';

function Placeholder() {
    return (
        <Center paddingTop={8}>
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        </Center>
    );
}

export default Placeholder;