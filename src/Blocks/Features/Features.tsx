import BlockTitle from "~/components/UI/BlockTitle/BlockTitle.tsx";
import classes from './Features.module.css'
import wedding from '../../assets/images/wedding.jpg'
import cruise from '../../assets/images/cruise.jpg'
import heal from '../../assets/images/healing.jpg'
import resortDay from '../../assets/images/resort-day.jpg'
import romantic from '../../assets/images/romantic.jpeg'
import culture from '../../assets/images/culture.jpg'

const Features = () => {
    return (
            <>
                <div className={classes.titleWrapper}>
                    <BlockTitle id={'features'}>Особенности<br/> нашего острова</BlockTitle>
                </div>

                <div className={classes.features}>
                    <div className={classes.features__left}>
                        <div className={`${classes.features__picture}`}
                             style={{ backgroundImage: `url(${wedding})` }} // TODO переделать в tailwind (тут style даже алиасы не принимает)
                        >
                            <div className={classes.featuresCard__left}>
                                <div className={classes.featuresCard}>
                                    <h2 className={classes.features__label}>Свадьбы</h2>
                                    <p className={classes.features__subLabel}>Организуем красивую свадебную
                                        церемонию на любой вкус и бюджет</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.features__picture}
                             style={{ backgroundImage: `url(${heal})` }} // TODO переделать в tailwind (тут style даже алиасы не принимает)
                        >
                            <div className={classes.featuresCard__left}>
                                <div className={classes.featuresCard}>
                                    <h2 className={classes.features__label}>Лечение</h2>
                                    <p className={classes.features__subLabel}>Совместите приятное с полезным. Предлагаем
                                        вам массаж и аюрведические процедуры</p>
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
                                    <p className={classes.features__subLabel}>Арендуйте яхту с друзьями или семьей и
                                        отправьтесь в путешествие по своему уникальному маршруту</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.features}>
                    <div className={classes.features__right}>
                        <div className={classes.features__picture}
                             style={{ backgroundImage: `url(${resortDay})` }} // TODO переделать в tailwind (тут style даже алиасы не принимает)
                        >
                            <div className={classes.featuresCard__right}>
                                <div className={classes.featuresCard}>
                                    <h2 className={classes.features__label}>День на резорте</h2>
                                    <p className={classes.features__subLabel}>Мы отвезем вас в один из отелей-резортов,
                                        где вы сможете насладиться беззаботным отдыхом в райском месте</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.features__left}>
                        <div className={classes.features__picture}
                             style={{ backgroundImage: `url(${romantic})` }} // TODO переделать в tailwind (тут style даже алиасы не принимает)
                        >
                            <div className={classes.featuresCard__left}>
                                <div className={classes.featuresCard}>
                                    <h2 className={classes.features__label}>Романтический ужин</h2>
                                    <p className={classes.features__subLabel}>Мы поможем красиво отметить любое ваше
                                        событие</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.features__picture}
                             style={{ backgroundImage: `url(${culture})` }} // TODO переделать в tailwind (тут style даже алиасы не принимает)
                        >
                            <div className={classes.featuresCard__left}>
                                <div className={classes.featuresCard}>
                                    <h2 className={classes.features__label}>Культура Мальдив</h2>
                                    <p className={classes.features__subLabel}>Мы сможем скрасить ваше пребывание на
                                        нашем
                                        острове национальными танцами, песнями, организовать мастер-классы по
                                        изготовлению мальдивского сувенира, а так же фотосессию в национальных
                                        костюмах.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
};

export default Features;
