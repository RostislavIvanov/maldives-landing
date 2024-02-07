import { useEffect } from "react";

export const useScrollLock = (isModalOpened: boolean) => {
    const body = document.querySelector('body')
    useEffect(() => {
        if (body) {
            body.className = isModalOpened ? 'overflow-hidden' : ''
        }

    }, [ body, isModalOpened ]);
}