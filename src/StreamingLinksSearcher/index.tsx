import React from 'react';
import { VStack } from '@chakra-ui/react';
import { ModalBody } from '@chakra-ui/modal';

import StreamingLinkFormDataProvider from './StreamingLinkFormDataProvider';
import StreamingLinkSearcherForm from './StreamingLinkSearcherForm';
import StreamingLinkSearchResults from './StreamingLinkSearchResults';

type Props = {
    id: string,
}

function StreamingLinksSearcher(props: Props) {
    return (
        <ModalBody h="600">
            <StreamingLinkFormDataProvider>
                <VStack padding="4vh" w="100%">
                    <StreamingLinkSearcherForm />
                    <StreamingLinkSearchResults id={props.id} />
                </VStack>
            </StreamingLinkFormDataProvider>
        </ModalBody>
    );
}

export default StreamingLinksSearcher;
