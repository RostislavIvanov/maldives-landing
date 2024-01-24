import classes from './ModalPanel.module.css'
import { FC } from "react";
import Slider from "~/components/Slider/Slider.tsx";
import Button from "~/components/UI/Button/Button.tsx";

type ModalPanelProps = {
    closeModal: VoidFunction;
    images: string[];
    text?: string;
}

const ModalPanel: FC<ModalPanelProps> = ({ images, text, closeModal }) => {
    return (
        <>
            <div className={classes.modal}>
                <Slider autoPlay={true} autoPlayTime={4000} images={images}/>
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
