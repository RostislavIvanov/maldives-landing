import classes from './ModalPanel.module.css'
import { FC } from "react";
import Slider from "~/components/Slider/Slider.tsx";
import Button from "~/components/UI/Button/Button.tsx";

type ModalPanelProps = {
    closeModal: VoidFunction;
    images: string[];
    autoplay: boolean;
    autoplayTime: number;
    text?: string;
}

const ModalPanel: FC<ModalPanelProps> = ({ images, closeModal, autoplay, autoplayTime, text }) => {
    return (
        <>
            <div className={classes.modal}>
                <Slider autoPlay={autoplay} autoPlayTime={autoplayTime} images={images}/>
                <div className={classes.modal__text}>
                    <p>{text}</p>
                    <Button onClick={closeModal}>Закрыть</Button>
                </div>
            </div>
            <div className={classes.modal__back} onClick={closeModal}/>
        </>
    )
}

export default ModalPanel
