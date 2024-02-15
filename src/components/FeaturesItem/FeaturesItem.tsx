import { FC } from 'react';
import classes from '~/Blocks/Features/Features.module.css';
import tap from '~/assets/icons/Tap.svg'

type FeaturesItemProps = {
    label: string;
    subLabel: string;
    imageUrl: string;
    side: 'left' | 'right';
    openModal: (images: string[], text?: string) => void;
    modalImages?: string[];
    modalText?: string;
}
const FeaturesItem: FC<FeaturesItemProps> = ({ label, subLabel, imageUrl, side, modalImages = [], openModal, modalText }) => {
    const onItemClick = () => openModal(modalImages, modalText)
    return (
        <div className={classes.features__picture} onClick={onItemClick}
             style={{ backgroundImage: `url(${imageUrl})` }} // TODO переделать в tailwind (тут style даже алиасы не принимает)
        >
            <div className={side === 'right' ? classes.featuresCard__right : classes.featuresCard__left}>
                <div className={classes.featuresCard}>
                    <h2 className={classes.features__label}>{label}</h2>
                    <p className={classes.features__subLabel}>{subLabel}</p>
                    <img className={classes.features__icon} src={tap} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default FeaturesItem;
