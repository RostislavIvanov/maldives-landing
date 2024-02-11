import { FC } from "react";
import classes from './Accommodation.module.css'
import rosyVilla from '~/assets/images/232311885.jpg'
import rosyVilla1 from '~/assets/images/232863959 (1).jpg'
import rosyVilla2 from '~/assets/images/271603025.jpg'
import star from '~/assets/icons/star.svg'
// import arrow from '~/assets/icons/arrow-right-black.svg'
import Button from "~/components/UI/Button/Button.tsx";

const Accommodation: FC = () => {
    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <div className={classes.accommodation}>
                    <div className={classes.accommodation__item}>
                        <div className={classes.accommodation__mainImageWrapper}>
                            <img className={classes.accommodation__mainImage} src={rosyVilla} alt=""/>
                        </div>
                    </div>
                    <div className={classes.accommodation__item}>
                        <div className={classes.accommodation__info}>
                            <div className={classes.accommodation__text}>
                                <h2 className={classes.accommodation__hotelName}>Rosy Villa Hotel</h2>
                                <div className={classes.accommodation__stars}>
                                    <img src={star} alt=""/>
                                    <img src={star} alt=""/>
                                    <img src={star} alt=""/>
                                    <img src={star} alt=""/>
                                </div>
                                <p>
                                    Rosy Villa Hotel — это отель, расположенный в городе Гурайдо. К услугам гостей
                                    бесплатные велосипеды, общий лаундж, терраса и ресторан. Вариант размещения
                                    расположен в 100м от такой достопримечательности, как Пляж Гурайду.
                                </p>
                                <div className={classes.accommodation__btn}>
                                    <Button>Подробнее</Button>
                                </div>
                            </div>
                            <div className={classes.accommodation__images}>
                                <div className={classes.accommodation__imagesItemCon}>
                                    <img className={classes.accommodation__imagesItem} src={rosyVilla1} alt=""/>
                                </div>
                                <div className={classes.accommodation__imagesItemCon}>
                                    <img className={classes.accommodation__imagesItem} src={rosyVilla2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accommodation;
