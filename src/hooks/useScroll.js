import { useEffect, useRef } from 'react';

export const useScroll = ({ parentRef, childRef, cb }) => {
    const observer = useRef();

    const prevHeight = useRef(0);
    const currentHight = useRef();

    useEffect(() => {
        currentHight.current = parentRef.current.scrollHeight;
    }, [parentRef]);

    useEffect(() => {
        const observable = childRef.current;

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1,
        };

        observer.current = new IntersectionObserver(([target]) => {
            // Если высота родителя не поменялась, то прекратить подгрузку, предполагая, что все данные уже загружены
            if (target.isIntersecting && !(prevHeight.current === currentHight.current)) {
                prevHeight.current = currentHight.current;
                cb();
                currentHight.current = parentRef.current.scrollHeight + parentRef.current.offsetHeight;
            }
        }, options);

        observer.current.observe(observable);

        return () => {
            observer.current.unobserve(observable);
        };
    }, [cb, parentRef, childRef]);
};
