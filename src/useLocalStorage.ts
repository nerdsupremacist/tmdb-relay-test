
import type { Dispatch, SetStateAction } from 'react';

import { useCallback, useEffect, useState } from 'react';

export default function useLocalStorage<S>(
    key: string,
    initialValue: S | (() => S),
): [S, Dispatch<SetStateAction<S>>] {
    const [value, setValue] = useState<S>(
        () => {
            const localValue = window.localStorage.getItem(key);
            if (localValue == null) {
                if (typeof initialValue === 'function') {
                    return (initialValue as () => S)();
                }
                return initialValue as S;
            }

            return JSON.parse(localValue);
        },
    );

    const setItem = useCallback((action: SetStateAction<S>) => {
        let newValue;
        if (typeof action === 'function') {
            newValue = (action as (prevState: S) => S)(value);
        } else {
            newValue = action;
        }
        
        setValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
    }, [value, key]);

    const handleStorage = useCallback(
        (event: StorageEvent) => {
            if (event.key === key) {
                if (event.newValue != null) {
                    const parsed = JSON.parse(event.newValue) as S;
                    if (parsed !== value) {
                        setValue(parsed as S);
                    }
                } else {
                    if (typeof initialValue === 'function') {
                        setValue((initialValue as () => S)());
                    } else {
                        setValue(initialValue as S);
                    }
                }
            }
        },
        [value, setValue, initialValue, key],
    );

    useEffect(() => {
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, [handleStorage]);

    return [value, setItem];
}
