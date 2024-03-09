import classes from './HugeTitle.module.css';
import Button from '~/components/UI/Button/Button.tsx';
import { FC } from 'react';

type HugeTitleProps = {
    handleLinkClick: (e: React.MouseEvent<HTMLElement>, link: string) => void;
}

const HugeTitle: FC<HugeTitleProps> = ({ handleLinkClick }) => {
    return (
        <div>
            <h1 className={classes.huge__title}>Мальдивы</h1>
            <div className={classes.huge__subtitle}>Ваше незабываемое приключение</div>

            <div className={classes.huge__stripe}>|</div>

            <div className={classes.huge__btn}>
                <Button onClick={e => handleLinkClick(e, 'prices')} color={'white'}>
                    Подобрать тур
                </Button>
            </div>
        </div>
    );
};

export default HugeTitle;
