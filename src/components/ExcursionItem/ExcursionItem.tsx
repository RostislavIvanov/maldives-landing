import { FC } from 'react';
import classes from './ExcursionItem.module.css';
import Button from '~/components/UI/Button/Button.tsx';

type ExcursionItemProps = {
    title: string;
    description: string;
    imageUrl: string;
    openModal: (images: string[], text: string) => void;
    modalImages?: string[];
    modalText: string;
}

const ExcursionItem: FC<ExcursionItemProps> = (
    {
        title,
        description,
        imageUrl,
        openModal,
        modalImages = [],
        modalText
    }) => {
    const onItemClick = () => openModal(modalImages, modalText);

    return (
        <div className={classes.excursion}>
            <div className={classes.excursion__dark}></div>
            <div
                style={{ backgroundImage: `url(${imageUrl})` }} // TODO переделать в tailwind (тут style даже алиасы не принимает)
                className={classes.excursion__back}
            >
                <div className={classes.excursion__info}>
                    <h5 className={classes.excursion__title}>{title}</h5>
                    <div className={classes.excursion__content}>
                        <div className={classes.excursion__desc}>{description}</div>
                        <Button color={'white'} onClick={onItemClick}>Подробнее</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExcursionItem;
