import type { Links, SearchListSelection } from './useSearchList';
import type { DependencyList, ForwardedRef, ReactNode } from 'react';

import React, { useCallback, useContext, useEffect } from 'react';

interface Props extends Omit<SearchListSelection, 'onKeyDown'> {
    children: ReactNode | ReactNode[] | null,
    onClickOnResults?: () => void,
}

interface ContextType extends Omit<SearchListSelection, 'onKeyDown'> {
    onClickOnResults?: (() => void)
}

function noop() {
    // no-op
}

const SearchContext = React.createContext<ContextType>({
    links: () => noop(),
    loadingIndicatorRef: () => noop,
    onClickOnResults: undefined,
    reference: () => () => noop,
    select: () => noop(),
    selected: null,
});

export function SearchContextProvider({
    children,
    ...context
}: Props) {
    return <SearchContext.Provider value={context}>
        {children}
    </SearchContext.Provider>;
}

export function useOnClickOnResults() {
    const context = useContext(SearchContext);
    return context.onClickOnResults ?? noop;
}

export function useLinks(generateLinks: () => Links, deps: DependencyList) {
    const { links } = useContext(SearchContext);

    useEffect(() => {
        if (links == null) {
            return;
        }

        const newLinks = generateLinks();
        switch (typeof links) {
        case 'object':
            links.current = newLinks;
            break;
        case 'function':
            links(newLinks);
            break;
        default:
            break;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...deps, links, generateLinks]);
}

export function useSelected(): number | null {
    const { selected } = useContext(SearchContext);
    return selected;
}

export function useSelect(index: number): () => void {
    const { select } = useContext(SearchContext);
    const selection = useCallback(
        () => {
            select(index);
        },
        [select, index],
    );
    return selection;
}

export function useResultRef(index: number): ForwardedRef<HTMLDivElement> {
    const { reference } = useContext(SearchContext);
    return reference(index);
}

export function useLoadingIndicatorRef(): ForwardedRef<HTMLDivElement> {
    const { loadingIndicatorRef } = useContext(SearchContext);
    return loadingIndicatorRef;
}
