import { FC } from 'react';
import classes from '~/Blocks/Programs/Programs.module.css';
import tap from '~/assets/icons/Tap.svg';

type ProgramsItemProps = {
    label: string;
    subLabel: string;
    imageUrl: string;
    side: 'left' | 'right';
    openModal: (images: string[], text: string) => void;
    modalImages?: string[];
    modalText: string;
}
const ProgramsItem: FC<ProgramsItemProps> = (
    {
        label,
        subLabel,
        imageUrl,
        side,
        modalImages = [],
        openModal,
        modalText
    }) => {
    const onItemClick = () => openModal(modalImages, modalText);
    return (
        <article className={classes.features__picture} onClick={onItemClick}
             style={{ backgroundImage: `url(${imageUrl})` }} // TODO переделать в tailwind (тут style даже алиасы не принимает)
        >
            <div className={side === 'right' ? classes.featuresCard__right : classes.featuresCard__left}>
                <div className={classes.featuresCard}>
                    <h2 className={classes.features__label}>{label}</h2>
                    <p className={classes.features__subLabel}>{subLabel}</p>
                    <img className={classes.features__icon} src={tap} alt=''/>
                </div>
            </div>
        </article>
    );
};

export default ProgramsItem;
