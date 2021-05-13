import type { StackProps } from '@chakra-ui/react';

import { ForwardedRef, ReactNode } from 'react';
import React, { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import { Box, Flex, HStack, Spacer, useColorModeValue } from '@chakra-ui/react';

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
    const stackReference = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        switch (typeof ref) {
        case 'function':
            ref(stackReference.current);
            break;
        case 'object':
            if (ref != null) {
                ref.current = stackReference.current;
            }
            break;
        }
    }, [ref, stackReference]);

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

    const height = stackReference.current?.clientHeight ?? 0;
    const width = stackReference.current?.clientWidth ?? 0;
    const offsetTop = stackReference.current?.offsetTop ?? 0;
    const parentOffset = stackReference.current?.parentElement?.offsetTop ?? 0;
    
    const color = useColorModeValue('#FFFFFF', '#1A202C');
    const borderColor = `${color}FF`;
    const innerColor = `${color}00`;

    return (
        <>
            <HStack onScroll={onScroll} overflowY="scroll" ref={stackReference} {...stackProps}>
                {children}
            </HStack>
            <Flex
                h={height}
                pointerEvents="none"
                position="absolute"
                style={{
                    marginTop: offsetTop - parentOffset,
                }}
                w={width}
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

