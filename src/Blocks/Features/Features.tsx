import BlockTitle from "~/components/UI/BlockTitle/BlockTitle.tsx";
import classes from './Features.module.css'
import wedding from '../../assets/images/wedding.jpg'
import cruise from '../../assets/images/cruise.jpg'
import heal from '../../assets/images/healing.jpg'
import resortDay from '../../assets/images/resort-day.jpg'
import romantic from '../../assets/images/romantic.jpeg'
import culture from '../../assets/images/culture.jpg'
import FeaturesItem from "~/components/FeaturesItem/FeaturesItem.tsx";
import { FC } from "react";

const Features:FC = () => {
    return (
        <>
            <div className={classes.titleWrapper}>
                <BlockTitle id={'features'}>Особенности<br/> нашего острова</BlockTitle>
            </div>
            <div className={classes.features}>
                <div className={classes.features__left}>
                    <FeaturesItem label={'Свадьбы'}
                                  subLabel={'Организуем красивую свадебную церемонию на любой вкус и бюджет'}
                                  imageUrl={wedding} side={"left"}
                    />
                    <FeaturesItem label={'Лечение'}
                                  subLabel={'Совместите приятное с полезным. Предлагаем вам массаж и аюрведические процедуры'}
                                  imageUrl={heal} side={"left"}
                    />
                </div>
                <div className={classes.features__right}>
                    <FeaturesItem label={'Круизы'}
                                  subLabel={'Арендуйте яхту с друзьями или семьей и отправьтесь в путешествие по своему ' +
                                      'уникальному маршруту'}
                                  imageUrl={cruise} side={"right"}
                    />
                </div>
            </div>
            <div className={classes.features}>
                <div className={classes.features__right}>
                    <FeaturesItem label={'День на резорте'}
                                  subLabel={'Мы отвезем вас в один из отелей-резортов, где вы сможете насладиться ' +
                                      'беззаботным отдыхом в райском месте'}
                                  imageUrl={resortDay} side={"right"}
                    />
                </div>
                <div className={classes.features__left}>
                    <FeaturesItem label={'Романтический ужин'}
                                  subLabel={'Мы поможем красиво отметить любое ваше событие'}
                                  imageUrl={romantic} side={"left"}
                    />
                    <FeaturesItem label={'Культура Мальдив'}
                                  subLabel={'Мы сможем скрасить ваше пребывание на нашем острове национальными танцами, ' +
                                      'песнями, организовать мастер-классы по изготовлению мальдивского сувенира, а так ' +
                                      'же фотосессию в национальных костюмах.'}
                                  imageUrl={culture} side={"left"}
                    />
                </div>
            </div>
        </>
    );
};

export default Features;
