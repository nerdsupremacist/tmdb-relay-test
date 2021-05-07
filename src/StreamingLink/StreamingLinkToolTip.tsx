import type { StreamingLinkToolTip_option$key } from './__generated__/StreamingLinkToolTip_option.graphql';
import type { ReactNode } from 'react';

import React from 'react';
import { Tooltip } from '@chakra-ui/tooltip';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    option: StreamingLinkToolTip_option$key,
    children: ReactNode | ReactNode[],
}

function StreamingLinkToolTip(props: Props) {
    const option = useFragment(
        graphql`
            fragment StreamingLinkToolTip_option on StreamingOption {
                provider {
                    name
                }
            }
        `,
        props.option,
    );

    if (option.provider == null) {
        return (<div>
            {props.children}
        </div>);
    }

    return (
        <Tooltip bg="gray.300" color="black" hasArrow label={option.provider.name}>
            {props.children}
        </Tooltip>
    );
}

export default StreamingLinkToolTip;
