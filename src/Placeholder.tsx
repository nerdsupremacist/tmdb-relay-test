
import { Center, Spinner } from '@chakra-ui/react';
import React from 'react';

function Placeholder() {
    return (
        <Center paddingBottom={8} paddingTop={8}>
            <Spinner
                color="blue.500"
                emptyColor="gray.200"
                size="xl"
                speed="0.65s"
                thickness="4px"
            />
        </Center>
    );
}

export default Placeholder;