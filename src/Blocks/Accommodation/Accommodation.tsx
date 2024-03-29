import { FC } from 'react';
import classes from './Accommodation.module.css';
import rosyVilla from '~/assets/images/hotel-main.jpg';
import rosyVilla1 from '~/assets/images/hotel-pool.jpg';
import rosyVilla2 from '~/assets/images/deluxe.jpg';
import star from '~/assets/icons/star.svg';
import arrow from '~/assets/icons/arrow-right-black.svg';
import Button from '~/components/UI/Button/Button.tsx';
import { useNavigate } from 'react-router-dom';
import { useTranslate } from '~/hooks/useTranslate/useTranslate.ts';

const Accommodation: FC = () => {
    const navigate = useNavigate();
    const t = useTranslate('accommodation');
    const handleLink = () => {
        navigate('/rosyVillaHotel');
    };

    return (
        <section className={classes.content}>
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
                                <h2 id={'accommodation'} className={classes.accommodation__hotelName}>
                                    Rosy Villa Hotel
                                </h2>
                                <div className={classes.accommodation__stars}>
                                    <img src={star} alt=""/>
                                    <img src={star} alt=""/>
                                    <img src={star} alt=""/>
                                    <img src={star} alt=""/>
                                </div>
                                <div className={classes.accommodation__grade}>
                                    <span>8.7</span>{t('grade')}
                                </div>
                                <p dangerouslySetInnerHTML={{ __html: t('info') }}/>
                                <div className={classes.accommodation__btn}>
                                    <Button onClick={handleLink}>{t('button')}</Button>
                                </div>
                            </div>
                            <div className={classes.accommodation__images}>
                                <div className={classes.accommodation__imagesItemCon}>
                                    <img className={classes.accommodation__imagesItem} src={rosyVilla1} alt=""/>
                                    <div onClick={handleLink} className={classes.accommodation__arrow}>
                                        <img src={arrow} alt="->"/>
                                    </div>
                                </div>
                                <div className={classes.accommodation__imagesItemCon}>
                                    <img className={classes.accommodation__imagesItem} src={rosyVilla2} alt=""/>
                                    <div onClick={handleLink} className={classes.accommodation__arrow}>
                                        <img src={arrow} alt="->"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accommodation;
