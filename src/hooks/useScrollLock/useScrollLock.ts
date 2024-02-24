import { useEffect } from 'react';

export const useScrollLock = (shouldBeLocked: boolean) => {
    const body = document.querySelector('body');
    useEffect(() => {
        if (body) {
            body.className = shouldBeLocked ? 'overflow-hidden' : '';
        }

    }, [ body, shouldBeLocked ]);
};
