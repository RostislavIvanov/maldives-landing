import { FC } from 'react';
import classes from './Contacts.module.css';
import BlockTitle from '~/components/UI/BlockTitle/BlockTitle.tsx';
import Description from '~/components/Description/Description.tsx';
import logo from '~/assets/images/logo-original.png';
import whatsApp from '~/assets/icons/WhatsApp.svg';
import viber from '~/assets/icons/Viber.svg';
import telegram from '~/assets/icons/Telegram.svg';
import { useTranslate } from '~/hooks/useTranslate/useTranslate.ts';

const Contacts: FC = () => {
    const t = useTranslate('contacts');

    return (
        <section className={classes.content}>
            <div className={classes.wrapper}>
                <div className={classes.titleWrapper}>
                    <BlockTitle id={'contacts'}>
                        {t('title')}
                    </BlockTitle>
                </div>
                <div className={classes.contacts}>
                    <div className={classes.contacts__logo}>
                        <img src={logo} alt=""/>
                    </div>
                    <div className={classes.contacts__column}>
                        <h6 className={classes.contacts__title}>
                            {t('en.header')}
                        </h6>
                        <p className={classes.contacts__section}>
                            {t('en.consulting')}
                        </p>

                        <div className={classes.contacts__item}>
                            <div className={classes.contacts__label}>
                                {t('mail')}
                            </div>
                            <div className={classes.contacts__link}>
                                <div>reservations@rosyvillamaldives.com</div>
                                <div>Rosyc19mid@gmail.com</div>
                            </div>
                        </div>

                        <div className={classes.contacts__item}>
                            <div className={classes.contacts__label}>
                                {t('tel')}
                            </div>
                            <div className={classes.contacts__link}>
                                <a href="tel:+960787001">+960 999 4740</a>
                            </div>
                        </div>

                        <div className={'flex-1 flex flex-col-reverse'}>
                            <div className={classes.contacts__icons}>
                                <a target="_blank" rel="noopener noreferrer"
                                   href="https://wa.me/9609994740">
                                    <img src={whatsApp} alt="whatsApp"/>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="viber://chat?number=%2B9609994740">
                                    <img src={viber} alt="viber"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={classes.contacts__column}>
                        <h6 className={classes.contacts__title}>
                            {t('ru.header')}
                        </h6>
                        <p className={classes.contacts__section}>
                            {t('ru.consulting')}
                        </p>

                        <div className={classes.contacts__item}>
                            <div className={classes.contacts__label}>
                                {t('mail')}
                            </div>
                            <div className={classes.contacts__link}>
                                <div>veter-peremen-tur@yandex.ru</div>
                            </div>
                        </div>

                        <div className={classes.contacts__item}>
                            <div className={classes.contacts__label}>
                                {t('tel')}
                            </div>
                            <div className={classes.contacts__link}>
                                <a href="tel:+79858982743">+7(985)898-27-43</a>
                            </div>
                        </div>

                        <div className={classes.contacts__item}>
                            <div className={classes.contacts__label}>
                                {t('site')}
                            </div>
                            <div className={classes.contacts__link}>
                                <a target="_blank" href="https://tkveterperemen.ru/">
                                    www.tkveterperemen.ru
                                </a>
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
                        {t('moreInfo')}
                        <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://t.me/veterperemen_maldives">
                            {t('link')}
                        </a>
                    </Description>
                    <Description>
                        {t('advertisement')}
                        <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://t.me/rosy_villa_maldives">
                            {t('link')}
                        </a>
                    </Description>
                    <Description>
                        {t('description')}
                    </Description>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
