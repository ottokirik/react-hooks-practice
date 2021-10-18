import { useCallback, useRef } from 'react';

export const useDebounce = (cb, delay) => {
    const timer = useRef();

    const debouncedCallback = useCallback(
        (...args) => {
            if (timer.current) {
                clearInterval(timer.current);
            }

            timer.current = setTimeout(() => {
                cb(...args);
            }, delay);
        },
        [cb, delay]
    );

    return debouncedCallback;
};
