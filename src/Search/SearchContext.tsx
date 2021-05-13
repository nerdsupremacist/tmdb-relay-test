import type { ReactNode } from 'react';

import React, { useContext } from 'react';

type Props = {
    children: ReactNode | ReactNode[] | null
    onClickOnResults?: () => void
}

type ContextType = {
    onClickOnResults: (() => void) | undefined
}

const SearchContext = React.createContext<ContextType>({
    onClickOnResults: undefined,
});

function noop() {
    // no-op
}

export function SearchContextProvider({ children, onClickOnResults }: Props) {
    return <SearchContext.Provider value={{ onClickOnResults }}>
        {children}
    </SearchContext.Provider>;
}

export function useOnClickOnResults() {
    const context = useContext(SearchContext);
    return context.onClickOnResults ?? noop;
}
