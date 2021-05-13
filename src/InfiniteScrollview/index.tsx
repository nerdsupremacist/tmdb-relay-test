import type { StackProps } from '@chakra-ui/react';
import type { KeyType } from 'react-relay/relay-hooks/helpers';
import type { usePaginationFragmentHookType as HookType } from 'react-relay/relay-hooks/usePaginationFragment';
import type { Disposable, OperationType } from 'relay-runtime';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ReactNode } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Center, Spinner, VStack } from '@chakra-ui/react';

import HorizonalScrollview from 'HorizonalScrollview';

import { numbersFrom } from 'utils/numbersFrom';
import { omit } from 'utils/omit';
import { pick } from 'utils/pick';

type StackOptions = Omit<
    Omit<
        Omit<
            Omit<
                StackProps,
                'overflowY'
            >,
            'overflowX'
        >,
        'overflow'
    >,
    'children'
>;

type Connection<
    TQuery extends OperationType, TKey extends KeyType | null, TFragmentData
> = Omit<HookType<TQuery, TKey, TFragmentData>, 'data'>;

export interface Props<
    TQuery extends OperationType, TKey extends KeyType | null, TFragmentData
> extends StackOptions, Connection<TQuery, TKey, TFragmentData> {
    disabledLoading?: true,
    loadMoreCount?: number,
    scrollDirection?: 'horizontal' | 'vertical',
    children: ReactNode[] | ReactNode | null,
}

function InfiniteScrollview<
    TQuery extends OperationType, TKey extends KeyType | null, TFragmentData
>(props: Props<TQuery, TKey, TFragmentData>) {
    const loadMoreCount = props.loadMoreCount ?? 20;

    const {
        scrollDirection,
        children,
        hasNext,
        isLoadingNext,
        loadNext,
        ...stackProps
    } = omit(props, 'hasPrevious', 'isLoadingPrevious', 'loadPrevious', 'refetch', 'loadMoreCount', 'disabledLoading');

    const [error, setError] = useState<Error | null>(null);
    const direction = scrollDirection ?? 'vertical';
    const enabled = props.disabledLoading == null;

    const disposable = useRef<Disposable | null>(null);

    const loadMore = useCallback(() => {
        if (!isLoadingNext) {
            disposable.current = loadNext(
                loadMoreCount,
                {
                    onComplete: error => {
                        setError(error);
                        disposable.current = null;
                    },
                },
            );
        }
    }, [disposable, loadNext, loadMoreCount, isLoadingNext]);

    useEffect(() => {
        return () => {
            disposable.current?.dispose();
        };
    }, []);

    const [lastItemRef] = useInfiniteScroll({
        disabled: !enabled && error != null,
        hasNextPage: hasNext,
        loading: isLoadingNext,
        onLoadMore: loadMore,
    });

    const heightRef = useRef<HTMLDivElement | null>(null);
    const clientHeight = heightRef.current?.clientHeight;
    const {
        padding,
        paddingTop,
        paddingBottom,
    } = numbersFrom(pick(stackProps, 'padding', 'paddingTop', 'paddingBottom'));

    const spinnerHeight = clientHeight != null ?
        clientHeight - 12 - 2 * (padding ?? 0) - (paddingTop ?? 0) - (paddingBottom ?? 0) :
        '100%';

    switch (direction) {
    case 'horizontal':
        return (
            <HorizonalScrollview ref={heightRef} {...stackProps}>
                {children}
                {enabled && (isLoadingNext || hasNext) && (
                    <Center h={spinnerHeight} ref={lastItemRef}>
                        <Spinner
                            color="blue.500"
                            emptyColor="gray.200"
                            size="xl"
                            speed="0.65s"
                            thickness="4px"
                        />
                    </Center>
                )}
            </HorizonalScrollview>
        );
    case 'vertical':
        return (
            <VStack ref={heightRef} {...stackProps} >
                {children}
                {enabled && (isLoadingNext || hasNext) && (
                    <Center padding={8} ref={lastItemRef}>
                        <Spinner
                            color="blue.500"
                            emptyColor="gray.200"
                            size="xl"
                            speed="0.65s"
                            thickness="4px"
                        />
                    </Center>
                )}
            </VStack>
        );
    }
}

export default InfiniteScrollview;
