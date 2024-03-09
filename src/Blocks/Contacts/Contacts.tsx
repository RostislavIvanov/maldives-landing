import { FC } from 'react';
import classes from './Contacts.module.css';
import BlockTitle from '~/components/UI/BlockTitle/BlockTitle.tsx';
import Description from '~/components/Description/Description.tsx';
import logo from '~/assets/images/logo-original.png';
import whatsApp from '~/assets/icons/WhatsApp.svg';
import viber from '~/assets/icons/Viber.svg';
import telegram from '~/assets/icons/Telegram.svg';

const Contacts: FC = () => {
    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <div className={classes.titleWrapper}>
                    <BlockTitle id={'prices'}>
                        Цены и контакты
                    </BlockTitle>
                </div>
                <div className={classes.contacts}>
                    <div className={classes.contacts__logo}>
                        <img src={logo} alt=""/>
                    </div>
                    <div className={classes.contacts__column}>
                        <h6 className={classes.contacts__title}>
                            ROSY VILLA PVT LTD
                        </h6>
                        <p className={classes.contacts__section}>
                            Для консультаций и бронирования на английском языке
                        </p>

                        <div className={classes.contacts__item}>
                            <div className={classes.contacts__label}>Почта:</div>
                            <div className={classes.contacts__link}>
                                <div>reservations@rosyvillamaldives.com</div>
                                <div>Rosyc19mid@gmail.com</div>
                            </div>
                        </div>

                        <div className={classes.contacts__item}>
                            <div className={classes.contacts__label}>Телефон:</div>
                            <div className={classes.contacts__link}>
                                <a href="tel:+960787001">+960 999 4740</a>
                            </div>
                        </div>

                        <div className={'flex-1 flex flex-col-reverse'}>
                            <div className={classes.contacts__icons}>
                                <a target="_blank" rel="noopener noreferrer"
                                   href="https://api.whatsapp.com/send/?phone=9609994740">
                                    <img src={whatsApp} alt="whatsApp"/>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="viber://chat?number=%2B9609994740">
                                    <img src={viber} alt="viber"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={classes.contacts__column}>
                        <h6 className={classes.contacts__title}>Наши партнеры</h6>
                        <p className={classes.contacts__section}>
                            Для консультаций и бронирования на русском языке
                        </p>

                        <div className={classes.contacts__item}>
                            <div className={classes.contacts__label}>Почта:</div>
                            <div className={classes.contacts__link}>
                                <div>veter-peremen-tur@yandex.ru</div>
                            </div>
                        </div>

                        <div className={classes.contacts__item}>
                            <div className={classes.contacts__label}>Телефон:</div>
                            <div className={classes.contacts__link}>
                                <a href="tel:+79858982743">+7(985)898-27-43</a>
                            </div>
                        </div>

                        <div className={classes.contacts__item}>
                            <div className={classes.contacts__label}>Сайт:</div>
                            <div className={classes.contacts__link}>
                                <a target="_blank" href="https://tkveterperemen.ru/">ООО ТК «Ветер Перемен» tkveterperemen.ru</a>
                            </div>
                        </div>

                        <div className={'flex-1 flex flex-col-reverse'}>
                            <div className={classes.contacts__icons}>
                            <a target="_blank" rel="noopener noreferrer"
                                   href="https://api.whatsapp.com/send/?phone=79858982743">
                                    <img src={whatsApp} alt="whatsApp"/>
                                </a>
                                <a target='_blank' rel='noopener noreferrer' href='https://t.me/veterperementur'>
                                    <img src={telegram} alt='telegram'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={classes.contacts__desc}>
                    <Description>
                        Мы предлагаем присоединиться к уже готовой программе или можем просчитать индивидуальный маршрут
                        для ваших задач. Для консультации, расчета и бронирования на русском языке обращайтесь к нашим
                        партнерам в России.
                    </Description>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
