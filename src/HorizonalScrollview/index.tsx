import type { StackProps } from '@chakra-ui/react';
import type { ForwardedRef, ReactNode } from 'react';

import React, { forwardRef, useRef, useState } from 'react';
import { Box, Flex, HStack, Spacer, useColorModeValue, useMergeRefs } from '@chakra-ui/react';

import { useRect } from './useRect';

interface Props extends Omit<
    Omit<
        StackProps,
        'overflowY'
    >,
    'children'
> {
    offsetAtWhichBordersAreVisible?: number,
    children: ReactNode[] | ReactNode | null,
}

function HorizonalScrollview(
    { children, offsetAtWhichBordersAreVisible, ...stackProps }: Props,
    ref: ForwardedRef<HTMLDivElement>,
) {
    const [sizeRef, rect] = useRect<HTMLDivElement>();
    const stackReference = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRefs(stackReference, sizeRef, ref);

    const [startOpacity, setStartOpacity] = useState(0);
    const [endOpacity, setEndOpacity] = useState(1);

    const borderTransitionPoint = offsetAtWhichBordersAreVisible ?? 30;
    const onScroll = () => {
        if (stackReference.current != null) {
            const width = stackReference.current.clientWidth;
            const scrollWidth = stackReference.current.scrollWidth;
            const offset = stackReference.current?.scrollLeft;
            setStartOpacity(Math.min(Math.max(offset / borderTransitionPoint, 0), 1));
            setEndOpacity(Math.min(Math.max((scrollWidth - offset - width) / borderTransitionPoint, 0), 1));
        } else {
            setStartOpacity(0);
            setEndOpacity(1);
        }
    };
    
    const parentRect = rect.parent;
    const color = useColorModeValue('#FFFFFF', '#1A202C');
    const borderColor = `${color}FF`;
    const innerColor = `${color}00`;

    return (
        <>
            <HStack onScroll={onScroll} overflowY="scroll" ref={mergedRef} {...stackProps}>
                {children}
            </HStack>
            <Flex
                h={rect.height}
                pointerEvents="none"
                position="absolute"
                style={{
                    marginTop: rect.offsetTop - (parentRect?.offsetTop ?? 0),
                }}
                w={rect.width}
            >
                <Box
                    style={{
                        'backgroundImage': `linear-gradient(to right, ${borderColor} 30%, ${innerColor})`,
                        opacity: startOpacity,
                    }}
                    w={borderTransitionPoint}
                />
                <Spacer />
                <Box
                    style={{
                        'backgroundImage': `linear-gradient(to right, ${innerColor}, ${borderColor} 70%)`,
                        opacity: endOpacity,
                    }}
                    w={borderTransitionPoint}
                />
            </Flex>
        </>
    );
}

const HorizonalScrollviewWrapper = forwardRef<HTMLDivElement, Omit<Props, 'ref'>>(HorizonalScrollview);

export default HorizonalScrollviewWrapper;

