import classes from "./HugeTitle.module.css";

const HugeTitle = () => {
    return (
        <div>
            <h1 className={classes.huge__title}>Мальдивы</h1>
            <div className={classes.huge__subtitle}>Ваше незабываемое приключение на мальдивах</div>

            <div className={classes.huge__stripe}>|</div>

            <div className={classes.huge__btn}>
                <button>Подобрать тур</button>
            </div>
        </div>
    );
};

export default HugeTitle;
