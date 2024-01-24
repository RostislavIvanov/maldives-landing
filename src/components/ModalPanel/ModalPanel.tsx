import classes from './ModalPanel.module.css'
import { FC } from "react";
import Slider from "~/components/Slider/Slider.tsx";

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
                <div style={{ width: '40%' }}>
                    Лорем ипсум
                    <button onClick={closeModal}>
                        Закрыть🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄👍
                    </button>
                    <p>{text}</p>
                </div>
            </div>
            <div className={classes.modal__back} onClick={closeModal}/>
        </>
    )
}

export default ModalPanel
