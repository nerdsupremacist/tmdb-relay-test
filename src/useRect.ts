import { ForwardedRef, useCallback, useLayoutEffect, useRef, useState } from 'react';

type RectResult = {
    height: number,
    offsetLeft: number,
    offsetTop: number,
    width: number,
    parent: RectResult | null,
};

const defaultRect: RectResult = {
    height: 0,
    offsetLeft: 0,
    offsetTop: 0,
    parent: null,
    width: 0,
};

const initialUpdateIntervals = [100, 200, 500, 1000, 5000, 10000, 50000];

function getRect<T extends HTMLElement>(element: T | null): RectResult {
    if (element == null) {
        return defaultRect;
    }

    return {
        height: element.clientHeight,
        offsetLeft: element.offsetLeft,
        offsetTop: element.offsetTop,
        parent: element.parentElement != null ? getRect(element.parentElement) : null,
        width: element.clientWidth,
    };
}

function useRect<T extends HTMLElement>(
): [ForwardedRef<T>, RectResult] {
    const ref = useRef<T>(null);

    const [rect, setRect] = useState<RectResult>(getRect(ref.current));

    const update = useCallback(() => {
        if (ref.current == null) {
            return;
        }
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
