import classes from './ModalPanel.module.css';
import { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Slider from '~/components/Slider/Slider.tsx';
import Button from '~/components/UI/Button/Button.tsx';
import { useTranslate } from '~/hooks/useTranslate/useTranslate.ts';

type ModalPanelProps = {
    closeModal: VoidFunction;
    images: string[];
    autoplay: boolean;
    autoplayTime: number;
    text: string;
    showPrices: boolean
}

const ModalPanel: FC<ModalPanelProps> = (
    {
        images,
        closeModal,
        autoplay,
        autoplayTime,
        text,
        showPrices = false,
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
    const [modalHeight, setModalHeight] = useState<number | null>(null);

    useLayoutEffect(() => {
        if (modalRef.current) {
            setModalHeight(modalRef.current.clientHeight);
        }
    }, []);

    const handleTopInit = () => {
        return modalHeight ? `${modalHeight  / 2 + window.scrollY + 30}px` : 'auto';
    };
    const t = useTranslate('modal');

    return (
        <>
            <div className={classes.modal__back} onClick={closeModal}/>
            <div ref={modalRef} style={{ top: handleTopInit() }} className={classes.modal}>
                <Slider autoPlay={autoplay} autoPlayTime={autoplayTime} images={images}/>
                <div className={classes.modal__text}>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: text }}/>
                        { showPrices &&
                            <div className={classes.modal__prices}>
                                { t('pricesText') + ' ' }
                                <a
                                    className={classes.modal__link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://t.me/veterperemen_maldives/1101"
                                >
                                    { t('link') }
                                </a>
                            </div>
                        }
                    </div>
                    <Button onClick={closeModal}>
                        {t('button')}
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ModalPanel;
