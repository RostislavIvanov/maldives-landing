import Button from '~/components/UI/Button/Button.tsx';
import { FC } from 'react';
import classes from './RoomCard.module.css';
import { useTranslate } from '~/hooks/useTranslate/useTranslate.ts';

type RoomCardProps = {
    image: string;
    roomTitle: string;
    roomSubtitle: string;
    iconData: { icon: string, text: string }[];
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
    const t = useTranslate('hotel');

    return (
        <article className={classes.roomCard}>
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
                    <Button onClick={onItemClick}>
                        {t('button')}
                    </Button>
                </div>
            </div>
        </article>
    );
};

export default RoomCard;
