import { FC, Suspense, useState } from 'react';
import { ModalPanel } from '~/components/ModalPanel';

type CurrentCard = {
    images: string[];
    text: string;
}

type AutoplayTime = number

type ModalHookReturnType = [
    FC,
    (images: string[], text: string) => void
];

export const useModal = (autoplayTime?: AutoplayTime):ModalHookReturnType => {
    const [ isModalOpened, setIsModalOpened ] = useState(false);
    const [ currentCard, setCurrentCard ] = useState<CurrentCard>({
        images: [],
        text: '',
    });
    const closeModal = () => {
        setIsModalOpened(false);
        setCurrentCard({
            images: [],
            text: ''
        });
    };
    const openModal = (images: string[], text: string) => {
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
