import classes from './HugeTitle.module.css';
import Button from '~/components/UI/Button/Button.tsx';

const HugeTitle = () => {
    return (
        <div>
            <h1 className={classes.huge__title}>Мальдивы</h1>
            <div className={classes.huge__subtitle}>Ваше незабываемое приключение</div>

            <div className={classes.huge__stripe}>|</div>

            <div className={classes.huge__btn}>
                <Button color={'white'}>Подобрать тур</Button>
            </div>
        </div>
    );
};

export default HugeTitle;
