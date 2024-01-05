import BlockTitle from "~/components/UI/BlockTitle/BlockTitle.tsx";
import classes from './Features.module.css'
import wedding from '../../assets/images/wedding.jpg'
import cruise from '../../assets/images/cruise.jpg'
import heal from '../../assets/images/healing.jpg'
import Button from "~/components/UI/Button/Button.tsx";

const Features = () => {
    return (
        <>
            <div className={classes.titleWrapper}>
                <BlockTitle>Особенности<br/> нашего острова</BlockTitle>
            </div>

            <div className={classes.features}>
                <div className={classes.features__left}>
                    <div className={classes.features__picture}
                         style={{ backgroundImage: `url(${wedding})` }} // TODO переделать в tailwind (тут style даже алиасы не принимает)
                    >
                        <div className={classes.featuresCard__left}>
                            <div className={classes.featuresCard}>
                                <h2 className={classes.features__label}>Свадьбы</h2>
                                <Button color={'white'}>Подробнее</Button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.features__picture}
                         style={{ backgroundImage: `url(${heal})` }} // TODO переделать в tailwind (тут style даже алиасы не принимает)
                    >
                        <div className={classes.featuresCard__left}>
                            <div className={classes.featuresCard}>
                                <h2 className={classes.features__label}>Лечение</h2>
                                <Button color={'white'}>Подробнее</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.features__right}>
                    <div className={classes.features__picture}
                         style={{ backgroundImage: `url(${cruise})` }} // TODO переделать в tailwind (тут style даже алиасы не принимает)
                    >
                        <div className={classes.featuresCard__right}>
                            <div className={classes.featuresCard}>
                                <h2 className={classes.features__label}>Круизы</h2>
                                <Button color={'white'}>Подробнее</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
