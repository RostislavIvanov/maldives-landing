import classes from './Excursions.module.css';
import BlockTitle from '~/components/UI/BlockTitle/BlockTitle.tsx';
import ExcursionItem from '~/components/ExcursionItem/ExcursionItem.tsx';
import { useModal } from '~/hooks/useModal/useModal.tsx';
import { useTranslate } from '~/hooks/useTranslate/useTranslate.ts';
import { excursionImageData } from '~/data/excursionImageData.ts';

const Excursions = () => {
    const [ ModalPanel, openModal ] = useModal(4000);
    const t = useTranslate('excursions');

    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <div className={classes.titleWrapper}>
                    <BlockTitle label={t('subTitle')} id={'excursions'}>
                        {t('title')}
                    </BlockTitle>
                </div>
                <div className={classes.items}>
                    {excursionImageData.map((images, index) =>
                        <ExcursionItem
                            key={index}
                            title={t(`items.${index}.title`)}
                            description={t(`items.${index}.description`)}
                            imageUrl={images[0]}
                            openModal={openModal}
                            modalImages={images}
                            modalText={t(`items.${index}.modalText`)}
                        />,
                    )}
                </div>
            </div>
            <ModalPanel/>
        </div>
    );
};

export default Excursions;
