import classes from './HugeTitle.module.css';
import Button from '~/components/UI/Button/Button.tsx';
import { FC } from 'react';
import { useTranslate } from '~/hooks/useTranslate/useTranslate.ts';

type HugeTitleProps = {
    handleLinkClick: (e: React.MouseEvent<HTMLElement>, link: string) => void;
}

const HugeTitle: FC<HugeTitleProps> = ({ handleLinkClick }) => {
    const t = useTranslate('header');
    return (
        <div>
            <h1 className={classes.huge__title}>{t('main.title')}</h1>
            <div className={classes.huge__subtitle}>{t('main.subTitle')}</div>

            <div className={classes.huge__stripe}>|</div>

            <div className={classes.huge__btn}>
                <Button onClick={e => handleLinkClick(e, 'contacts')} color={'white'}>
                    {t('main.button')}
                </Button>
            </div>
        </div>
    );
};

export default HugeTitle;
