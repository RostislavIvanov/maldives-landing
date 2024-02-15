import { useState } from 'react';

type CurrentCard = {
    images: string[];
    text?: string;
}

type ModalHookReturnType = [
    boolean,
    CurrentCard,
    () => void,
    (images: string[], text?: string) => void
];

export const useModal = ():ModalHookReturnType => {
    const [ isModalOpened, setIsModalOpened ] = useState(false)
    const [ currentCard, setCurrentCard ] = useState<CurrentCard>({
        images: [],
        text: ''
    })
    const closeModal = () => {
        setIsModalOpened(false);
        setCurrentCard({
            images: [],
            text: ''
        })
    }
    const openModal = (images: string[], text?: string) => {
        setCurrentCard({
            images: images,
            text: text
        })
        setIsModalOpened(true)
    }

    return [isModalOpened, currentCard, closeModal, openModal]
}
