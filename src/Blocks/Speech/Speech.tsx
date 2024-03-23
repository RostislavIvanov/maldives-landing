import classes from './Speech.module.css';
import BlockTitle from '~/components/UI/BlockTitle/BlockTitle.tsx';
import manager from '~/assets/images/hassanPNG.png';
import signature from '~/assets/images/signature.png';
import { FC } from 'react';
import { useTranslate } from '~/hooks/useTranslate/useTranslate.ts';

const Speech: FC = () => {
    const t = useTranslate('speech');

    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <div className={classes.titleWrapper}>
                    <BlockTitle>
                        {t('title')}
                    </BlockTitle>
                </div>
                <div className={classes.speech}>
                    <div className={classes.speech__img}>
                        <img src={manager} alt=""/>
                    </div>
                    <div className={classes.speech__text}>
                        <p>
                            {t('text.first')}
                        </p>
                        <p>
                            {t('text.second')}
                        </p>
                        <p>
                            {t('text.third')}
                        </p>
                    </div>
                </div>
                <div className={classes.speech__bottom}>
                    <div className={classes.speech__ending}>
                        <p>{t('sign.first')}</p>
                        <p>{t('sign.second')}</p>
                    </div>
                    <div className={classes.speech__signature}>
                        <img src={signature} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speech;
