import { useRef, useCallback } from 'react';

export const useActivityTimer = () => {
    const startTimeRef = useRef<number | null>(null);
    const accumulatedRef = useRef<number>(0);
    const isRunningRef = useRef<boolean>(false);

    const start = useCallback(() => {
        if (!isRunningRef.current) {
            startTimeRef.current = Date.now();
            isRunningRef.current = true;
        }
    }, []);

    const pause = useCallback(() => {
        if (isRunningRef.current && startTimeRef.current) {
            accumulatedRef.current += Date.now() - startTimeRef.current;
            startTimeRef.current = null;
            isRunningRef.current = false;
        }
    }, []);

    const getMinutes = useCallback(() => {
        let total = accumulatedRef.current;
        if (isRunningRef.current && startTimeRef.current) {
            total += Date.now() - startTimeRef.current;
        }
        return Math.round(total / 60000); // Convert ms to minutes
    }, []);

    const reset = useCallback(() => {
        startTimeRef.current = null;
        accumulatedRef.current = 0;
        isRunningRef.current = false;
    }, []);

    return { start, pause, getMinutes, reset };
};
