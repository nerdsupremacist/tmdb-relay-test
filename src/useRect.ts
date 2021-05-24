import type { ForwardedRef } from 'react';
import type { Rect } from 'utils/types';

import { useCallback, useLayoutEffect, useRef, useState } from 'react';

const defaultRect: Rect = {
    height: 0,
    offsetLeft: 0,
    offsetTop: 0,
    parent: null,
    width: 0,
};

const initialUpdateIntervals = [100, 200, 500, 1000, 5000, 10000, 50000];

function getRect<T extends HTMLElement>(element: T | null): Rect {
    return element?.getRect() ?? defaultRect;
}

function useRect<T extends HTMLElement>(
): [ForwardedRef<T>, Rect] {
    const ref = useRef<T>(null);

    const [rect, setRect] = useState<Rect>(getRect(ref.current));

    const update = useCallback(() => {
        setRect(getRect(ref.current));
    }, [ref, setRect]);

    useLayoutEffect(() => {
        const element = ref.current;
        if (element == null) {
            return;
        }

        update();

        // Check again a couple of times (just in case...)
        const timeouts = initialUpdateIntervals.map(interval => setTimeout(update, interval));
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('resize', update);
            timeouts.forEach(timeout => clearTimeout(timeout));
        };
    
    }, [ref, update]);

    return [ref, rect];
}

export default useRect;
