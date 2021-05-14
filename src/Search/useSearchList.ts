
import type { ForwardedRef, KeyboardEvent, KeyboardEventHandler, RefCallback } from 'react';

import { useCallback, useRef, useState } from 'react';
import MultiRef from 'react-multi-ref';
import { useHistory } from 'react-router-dom';

import scrollIntoView from 'scroll-into-view-if-needed';

export type Links = (string | null)[]

export type SearchListSelection = {
    onKeyDown: KeyboardEventHandler<HTMLInputElement>
    selected: number | null,
    select: (index: number) => void,
    loadingIndicatorRef: ForwardedRef<HTMLDivElement>,
    links: ForwardedRef<Links>,
    reference: (index: number) => RefCallback<HTMLDivElement>,
}

function useSearchList(onClose?: () => void): SearchListSelection {
    const { push } = useHistory();
    const [resultRefs] = useState(() => new MultiRef<number, HTMLDivElement>());
    const links = useRef<Links | null>(null);
    const loadingIndicatorRef = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState(0);
    const [numberOfLinks, setNumberOfLinks] = useState(0);
    resultRefs.ref(1);

    const setLinks = useCallback((newLinks: Links | null) => {
        if (newLinks != null && links.current != null && newLinks[0] !== links.current[0]) {
            setSelected(0);
        }
        links.current = newLinks;
        setNumberOfLinks(newLinks?.length ?? 0);
    }, [links, setSelected, setNumberOfLinks]);

    const onKeyDown = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
            switch (event.key) {
            case 'ArrowUp': {
                const newSelected = Math.max(selected - 1, 0);
                const node = resultRefs.map.get(newSelected);
                if (node != null) {
                    scrollIntoView(node, {
                        block: 'nearest',
                        // boundary: menuRef.current,
                        inline: 'nearest',
                        scrollMode: 'if-needed',
                    });
                }
                setSelected(newSelected);
                event.preventDefault();
                break;
            }
            case 'ArrowDown': {
                const newSelected = Math.max(Math.min(selected + 1, numberOfLinks - 1), 0);
                const node = resultRefs.map.get(newSelected);
                
                if (newSelected >= numberOfLinks - 1 && loadingIndicatorRef.current != null) {
                    scrollIntoView(loadingIndicatorRef.current, {
                        block: 'nearest',
                        // boundary: menuRef.current,
                        inline: 'nearest',
                        scrollMode: 'if-needed',
                    });
                } else if (node != null) {
                    scrollIntoView(node, {
                        block: 'nearest',
                        // boundary: menuRef.current,
                        inline: 'nearest',
                        scrollMode: 'if-needed',
                    });
                }

                setSelected(newSelected);
                event.preventDefault();
                break;
            }
            case 'Enter': {
                const link = links.current?.[selected];
                if (link != null) {
                    onClose?.();
                    push(link);
                }
                event.preventDefault();
                break;
            }
            default:
                break;
            }
        },
        [selected, resultRefs.map, numberOfLinks, onClose, push],
    );

    const reference = useCallback((index: number) => {
        return resultRefs.ref(index);
    }, [resultRefs]);

    return {
        links: setLinks,
        loadingIndicatorRef,
        onKeyDown,
        reference,
        select: setSelected,
        selected: numberOfLinks > 0 ? selected : null,
    };
}

export default useSearchList;
