import React from 'react';
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
                <StreamingLinkSearcherForm />
                <StreamingLinkSearchResults id={props.id} />
            </StreamingLinkFormDataProvider>
        </ModalBody>
    );
}

export default StreamingLinksSearcher;
