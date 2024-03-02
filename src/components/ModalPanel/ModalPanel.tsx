import classes from './ModalPanel.module.css';
import { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Slider from '~/components/Slider/Slider.tsx';
import Button from '~/components/UI/Button/Button.tsx';

type ModalPanelProps = {
    closeModal: VoidFunction;
    images: string[];
    autoplay: boolean;
    autoplayTime: number;
    text?: string;
}

const ModalPanel: FC<ModalPanelProps> = (
    {
        images,
        closeModal,
        autoplay,
        autoplayTime,
        text,
    }) => {
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [ closeModal ]);

    const modalRef = useRef<HTMLDivElement>(null);
    // const handleTopInit = () => {
    //     return `${modalRef.current.clientHeight + window.scrollY / 2}px`;
    // };
    const [modalHeight, setModalHeight] = useState<number | null>(null);

    useLayoutEffect(() => {
        if (modalRef.current) {
            setModalHeight(modalRef.current.clientHeight);
        }
    }, []);

    const handleTopInit = () => {
        return modalHeight ? `${modalHeight  / 2 + window.scrollY + 30}px` : 'auto';
    };
    return (
        <>
            <div className={classes.modal__back} onClick={closeModal}/>
            <div ref={modalRef} style={{ top: handleTopInit() }} className={classes.modal}>
                <Slider autoPlay={autoplay} autoPlayTime={autoplayTime} images={images}/>
                <div className={classes.modal__text}>
                    <p>{text}</p>
                    <Button onClick={closeModal}>Закрыть</Button>
                </div>
            </div>
        </>
    );
};

export default ModalPanel;
