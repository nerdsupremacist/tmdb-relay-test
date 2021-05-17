import type { ShowParallaxBackdrop_show$key } from './__generated__/ShowParallaxBackdrop_show.graphql';

import React from 'react';
import { Parallax } from 'react-parallax';
import { AspectRatio, Box } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { BACKDROP_PLACEHOLDER } from 'utils/constants';

type Props = {
    show: ShowParallaxBackdrop_show$key,
}

function ShowParallaxBackdrop(props: Props) {
    const show = useFragment(
        graphql`
            fragment ShowParallaxBackdrop_show on TVShow {
                backdrop(size: Original)
            }
        `,
        props.show,
    );

    const backdrop = show.backdrop ?? BACKDROP_PLACEHOLDER;

    return (
        <Parallax bgImage={backdrop} strength={200}>
            <AspectRatio ratio={2.5}>
                <Box />
            </AspectRatio>
        </Parallax>
    );
}

export default ShowParallaxBackdrop;
