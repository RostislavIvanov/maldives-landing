import Button from '~/components/UI/Button/Button.tsx';
import { FC } from 'react';
import { roomDataType } from '~/data/RosyVillaHotelPageData.ts';
import classes from './RoomCard.module.css';

type RoomCardProps = {
    image: string;
    roomTitle: string;
    roomSubtitle: string;
    iconData: roomDataType[];
    openModal: (images: string[], text: string) => void;
    modalImages?: string[];
    modalText: string;
}
const RoomCard: FC<RoomCardProps> = (
    {
        image,
        roomTitle,
        roomSubtitle,
        iconData,
        modalText,
        modalImages = [],
        openModal,
    }) => {
    const onItemClick = () => openModal(modalImages, modalText);
    return (
        <div className={classes.roomCard}>
            <img src={image} alt=""/>
            <div className={classes.roomCard__con}>
                <h5 className={classes.roomCard__title}>{roomTitle}</h5>
                <h6>{roomSubtitle}</h6>
                <div className={classes.roomCard__features}>
                    {iconData.map(el =>
                        <div className={classes.roomFeatures}>
                            <img src={el.icon} alt=""/>
                            <div>{el.text}</div>
                        </div>,
                    )}
                </div>
                <div className={classes.roomCard__btn}>
                    <div>
                        <Button onClick={onItemClick}>Подробнее</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
