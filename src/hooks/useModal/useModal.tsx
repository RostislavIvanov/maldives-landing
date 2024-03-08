import { FC, ReactNode, Suspense, useState } from 'react';
import { ModalPanel } from '~/components/ModalPanel';

type CurrentCard = {
    images: string[];
    text?: ReactNode;
}

type AutoplayTime = number

type ModalHookReturnType = [
    FC,
    (images: string[], text?: ReactNode) => void
];

export const useModal = (autoplayTime?: AutoplayTime):ModalHookReturnType => {
    const [ isModalOpened, setIsModalOpened ] = useState(false);
    const [ currentCard, setCurrentCard ] = useState<CurrentCard>({
        images: [],
        text: <div></div>,
    });
    const closeModal = () => {
        setIsModalOpened(false);
        setCurrentCard({
            images: [],
            text: <div></div>
        });
    };
    const openModal = (images: string[], text?: ReactNode) => {
        setCurrentCard({
            images: images,
            text: text
        });
        setIsModalOpened(true);
    };
    const ModalWithLoading = () => {
        return isModalOpened && (
            <Suspense>
                <ModalPanel
                    images={currentCard.images}
                    text={currentCard.text}
                    closeModal={closeModal}
                    autoplay={!!autoplayTime}
                    autoplayTime={autoplayTime ?? 0}
                />
            </Suspense>
        );
    };

    return [ModalWithLoading, openModal];
};
